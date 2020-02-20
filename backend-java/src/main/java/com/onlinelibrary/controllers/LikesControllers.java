package com.onlinelibrary.controllers;

import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.CommentService;
import com.onlinelibrary.service.LikesService;
import com.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/user/likes")
public class LikesControllers {

    @Autowired
    private UserService userService;

    @Autowired
    private CommentService commentService;

    @Autowired
    private LikesService likesService;

    @PostMapping("/add")
    public ResponseEntity addCommentLike(@RequestBody Long commentId, Principal principal){

        User user = userService.findByUsername(principal.getName());
        Comment comment = commentService.findOne(commentId);
       likesService.addLikesToComment(comment, user);

        return new ResponseEntity("Success", HttpStatus.OK);
    }

    @GetMapping("/getLikesListBasedOnComment/{commentId}")
    public ResponseEntity<?> getLikesList(@PathVariable("commentId") Long commentId,Principal principal) {
        User user = userService.findByUsername(principal.getName());
        List<Long> userIdList = likesService.findUserByCommentId(commentId);
        List<User> userList = new ArrayList<>();
        for (Long userId : userIdList)
        {
            User user1 = userService.findOne(userId);
            userList.add(user1);
        }

        return new ResponseEntity(userList, HttpStatus.OK);
    }
}


