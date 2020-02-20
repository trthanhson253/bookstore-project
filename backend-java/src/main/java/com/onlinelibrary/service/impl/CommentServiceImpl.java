package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.CommentRepository;
import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;


    @Override
    public Comment save(Comment comment) {

//        Likes likes = new Likes();
//        likes.setQty(0);
//        likes.setUser(comment.getUser());
//        comment.setLikes(likes);
//        likes.setComment(comment);

        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> findAll() {
        return (List<Comment>) commentRepository.findAll();
    }

    @Override
    public Comment findById(Long commentId) {
        return commentRepository.findById(commentId).get();
    }

    @Override
    public void updateReplyComment(ReplyComment replyComment, Comment comment, User user) {
        replyComment.setUser(user);
        replyComment.setComment(comment);
        comment.getReplyCommentList().add(replyComment);
        save(comment);
    }

    @Override
    public Comment findOne(Long commentId) {
        return commentRepository.findById(commentId).get();
    }
}
