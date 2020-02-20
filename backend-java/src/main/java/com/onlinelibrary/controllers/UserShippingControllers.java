package com.onlinelibrary.controllers;

import com.onlinelibrary.entity.User;
import com.onlinelibrary.entity.UserPayment;
import com.onlinelibrary.entity.UserShipping;
import com.onlinelibrary.service.UserService;
import com.onlinelibrary.service.UserShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/user/shipping")
public class UserShippingControllers {
    @Autowired
    private UserShippingService userShippingService;

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity addNewUserShipping(@RequestBody UserShipping userShipping, Principal principal){
        User currentUser = userService.findByUsername(principal.getName());
        userService.updateUserShipping(userShipping,currentUser);
        return new ResponseEntity(userShipping, HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity deleteUserShipping(@RequestBody String id, Principal principal){
        userShippingService.removeById(Long.valueOf(id));
        return new ResponseEntity("Deleted Successfully", HttpStatus.OK);
    }

    @GetMapping("/getCurrentUserShippingList")
    public ResponseEntity getCurrentUserShippingList(Principal principal){
        User currentUser = new User();
        if(null != principal){
            currentUser = userService.findByUsername(principal.getName());
        }
        List<UserShipping> userShippingList = currentUser.getUserShippingList();

        return new ResponseEntity(userShippingList, HttpStatus.OK);
    }

    @PostMapping(value="/setDefault")
    public ResponseEntity setDefaultUserShippingPost(
            @RequestBody String id, Principal principal
    ){
        User user = userService.findByUsername(principal.getName());
        userService.setUserDefaultShipping(Long.parseLong(id), user);

        return new ResponseEntity("Set Default Shipping Successfully!", HttpStatus.OK);
    }
}
