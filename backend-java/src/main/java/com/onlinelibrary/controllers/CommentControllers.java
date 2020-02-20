package com.onlinelibrary.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.BooksService;
import com.onlinelibrary.service.CommentService;
import com.onlinelibrary.service.ReplyCommentService;
import com.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/user/comment")
public class CommentControllers {

    @Autowired
    private UserService userService;

    @Autowired
    private BooksService booksService;

    @Autowired
    private CommentService commentService;

    @Autowired
    private ReplyCommentService replyCommentService;

    @GetMapping("/getCommentListForBook/{bookId}")
    public List<Comment> getCommentListForBook(@PathVariable("bookId") Long bookId){
        Book book = booksService.findOne(bookId);
        List<Comment> commentList=book.getCommentList();
        return commentList;
    }

    @PostMapping("/add")
    public ResponseEntity addComment(@RequestBody HashMap<String ,String> mapper, Principal principal){
        String bookId = (String) mapper.get("bookId");
        String commentContent = (String) mapper.get("commentContent");
        Comment comment= new Comment();
        comment.setContent(commentContent);
//        comment.setLikes(0);
        User user = userService.findByUsername(principal.getName());
        Book book= booksService.findOne(Long.parseLong(bookId));

        booksService.updateComment(comment,book,user);
        Comment newComment = commentService.save(comment);
        return new ResponseEntity(newComment, HttpStatus.OK);
    }

    @PostMapping("/replyComment/add")
    public ResponseEntity addReplyComment(@RequestBody HashMap<String ,String> mapper, Principal principal){
        String commentId = (String) mapper.get("commentId");
        String replyCommentContent = (String) mapper.get("replyCommentContent");
        ReplyComment replyComment= new ReplyComment();
        replyComment.setContent(replyCommentContent);
//        comment.setLikes(0);
        User user = userService.findByUsername(principal.getName());
        Comment comment= commentService.findById(Long.parseLong(commentId));

        commentService.updateReplyComment(replyComment,comment,user);
        ReplyComment newReplyComment = replyCommentService.save(replyComment);
        return new ResponseEntity(replyComment, HttpStatus.OK);
    }

    @GetMapping("/replyComment/getReplyCommentListForComment/{commentId}")
    public List<ReplyComment> getReplyCommentListForBook(@PathVariable("commentId") Long commentId){
        Comment comment = commentService.findById(commentId);
        List<ReplyComment> replyCommentList=comment.getReplyCommentList();
        return replyCommentList;
    }

//    @PostMapping("/statusLike")
//    public ResponseEntity getCommentLike(@RequestBody HashMap<String ,String> mapper){
//
//        String commentId = (String) mapper.get("commentId");
//        String qtyLike = (String) mapper.get("qtyLike");
//
//        Comment comment = commentService.findById(Long.parseLong(commentId));
//        comment.setLikes(comment.getLikes()+Integer.parseInt(qtyLike));
//        commentService.save(comment);
//        return new ResponseEntity(comment, HttpStatus.OK);
//    }
}