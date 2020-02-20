package com.onlinelibrary.controllers;

import com.onlinelibrary.config.SecurityUtility;
import com.onlinelibrary.config.WebSecurityConfig;
import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Role;
import com.onlinelibrary.entity.User;
import com.onlinelibrary.security.JwtTokenProvider;
import com.onlinelibrary.service.UserService;
import com.onlinelibrary.utility.MailConstructor;
import com.onlinelibrary.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.Principal;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="api/user")
public class UserControllers {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private MailConstructor mailConstructor;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/all")
    public List<User> getUserList(){
        List<User> allUsers = userService.findAllUsers();
        return allUsers;
    }

    @PostMapping("/add")
    public ResponseEntity<?> register(HttpServletRequest req, @RequestBody User user, BindingResult result) throws Exception{
        if(userService.findByUsername(user.getUsername())!=null){
            return new ResponseEntity<>("usernameExists",HttpStatus.CONFLICT);
        }
        if(userService.findByEmail(user.getEmail())!=null){
            return new ResponseEntity<>("emailExists",HttpStatus.CONFLICT);
        }
        if(user.getPassword().length() < 6){
            return new ResponseEntity<>("passwordLength",HttpStatus.CONFLICT);
        }
        if(!user.getPassword().equals(user.getConfirmPassword())){
            return new ResponseEntity<>("passwordNotMatch",HttpStatus.CONFLICT);
        }
        if(!user.getEmail().equals(user.getConfirmEmail())){
            return new ResponseEntity<>("emailNotMatch",HttpStatus.CONFLICT);
        }

//        userValidator.validate(user,result);
        User newUser = userService.saveUser(user);
        SimpleMailMessage email= mailConstructor.welcomeNewUser(user);
        mailSender.send(email);

        return new ResponseEntity<>(newUser,HttpStatus.OK);
    }

    @PostMapping(value="/add/image")
    public ResponseEntity upload(
            @RequestParam("id") Long id,
            HttpServletResponse response, HttpServletRequest request
    ){
        try {
            User user = userService.findOne(id);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = id+".png";


            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/user/"+fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value="/update/image", method=RequestMethod.POST)
    public ResponseEntity updateImagePost(
            @RequestParam("id") Long id,
            HttpServletResponse response, HttpServletRequest request
    ){
        try {
            User user = userService.findOne(id);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = id+".png";

            if(multipartFile.isEmpty()==true){
                Files.delete(Paths.get("src/main/resources/static/image/user/"+fileName));
            }
            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/user/"+fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/forgotPassword")
    public ResponseEntity<?> forgotPassword(HttpServletRequest req,@RequestBody String email) throws Exception{
        User user=userService.findByEmail(email);
        if(user==null){
            return new ResponseEntity("Email Not Found",HttpStatus.BAD_REQUEST);
        }
        String password= SecurityUtility.randomPassword();
        String encryptedPassword = passwordEncoder.encode(password);
        user.setPassword(encryptedPassword);
        userService.save(user);

        SimpleMailMessage emailSending= mailConstructor.retrievePasswordEmail(user,password);
        mailSender.send(emailSending);

        return new ResponseEntity<>("Email sent!",HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<?> login(Principal principal){
        if(principal==null){
            return ResponseEntity.ok(principal);
        }
        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken)principal;
        User user = userService.findByUsername(authenticationToken.getName());
        user.setToken(jwtTokenProvider.generateToken(authenticationToken));
        user.setPassword("");
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity logout(){
        SecurityContextHolder.clearContext();
        return new ResponseEntity("Logout Successfully!", HttpStatus.OK);
    }

    @GetMapping("/getCurrentUser")
    public User getCurrentUser(Principal principal){
        User user = new User();
        if(null != principal){
            user = userService.findByUsername(principal.getName());
        }

        return user;
    }

    @PostMapping(value="/updateName")
    public ResponseEntity updateName(
            @RequestBody String name, Principal principal
    ) throws Exception{
        User user = new User();
        if(null != principal){
            user = userService.findByUsername(principal.getName());
        }
        user.setName(name);
        userService.save(user);

        return new ResponseEntity(user, HttpStatus.OK);
    }

    @PostMapping(value="/updateEmail")
    public ResponseEntity updateEmail(
            @RequestBody String email, Principal principal
    ) throws Exception{
        User user = new User();
        if(null != principal){
            user = userService.findByUsername(principal.getName());
        }
        if(userService.findByEmail(email)!=null){
            return new ResponseEntity("Email already existed",HttpStatus.BAD_REQUEST);
        }
        user.setEmail(email);
        userService.save(user);

        return new ResponseEntity(user, HttpStatus.OK);
    }

    @PostMapping(value="/changePassword")
    public ResponseEntity updateEmail(
            @RequestBody HashMap<String, Object> mapper, Principal principal
    ) throws Exception{
        String newPassword = (String) mapper.get("newPassword");
        String currentPassword = (String) mapper.get("currentPassword");
        String retypePassword = (String) mapper.get("retypePassword");

        User currentUser = new User();
        if(null != principal){
            currentUser = userService.findByUsername(principal.getName());
        }


//        WebSecurityConfig securityConfig = new WebSecurityConfig();

        String dbPassword = currentUser.getPassword();

        if(passwordEncoder.matches(currentPassword, dbPassword)) {
            if(newPassword != null && !newPassword.isEmpty() && !newPassword.equals("") && newPassword.equals(retypePassword) ) {
                currentUser.setPassword(passwordEncoder.encode(newPassword));
            }else{
                return new ResponseEntity("PasswordAndReTypePasswordNotMatch", HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity("IncorrectCurrentPassword", HttpStatus.BAD_REQUEST);
        }

        userService.save(currentUser);

        return new ResponseEntity("Update Success", HttpStatus.OK);

    }
}
