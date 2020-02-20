package com.onlinelibrary.controllers;

import com.onlinelibrary.entity.User;
import com.onlinelibrary.entity.UserPayment;
import com.onlinelibrary.service.UserPaymentService;
import com.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/user/payment")
public class UserPaymentControllers {

    @Autowired
    private UserPaymentService userPaymentService;

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity addNewUserPayment(@RequestBody UserPayment userPayment, Principal principal){
        User currentUser = userService.findByUsername(principal.getName());
        userService.updateUserPayment(userPayment,currentUser);
        return new ResponseEntity(userPayment, HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity deleteUserPayment(@RequestBody String id, Principal principal){
        userPaymentService.removeById(Long.valueOf(id));
        return new ResponseEntity("Deleted Successfully", HttpStatus.OK);
    }

    @GetMapping("/getCurrentUserPaymentList")
    public ResponseEntity getCurrentUserPaymentList(Principal principal){
        User currentUser = new User();
        if(null != principal){
            currentUser = userService.findByUsername(principal.getName());
        }
        List<UserPayment> userPayment = currentUser.getUserPaymentList();

        return new ResponseEntity(userPayment, HttpStatus.OK);
    }

    @PostMapping(value="/setDefault")
    public ResponseEntity setDefaultPaymentPost(
            @RequestBody String id,
            Principal principal
    ){
        User user = userService.findByUsername(principal.getName());

        userService.setUserDefaultPayment(Long.parseLong(id), user);

        return new ResponseEntity("Payment Removed Successfully!", HttpStatus.OK);
    }
}
