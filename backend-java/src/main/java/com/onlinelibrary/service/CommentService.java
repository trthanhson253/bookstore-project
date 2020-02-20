package com.onlinelibrary.service;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Comment;
import com.onlinelibrary.entity.ReplyComment;
import com.onlinelibrary.entity.User;

import java.util.List;

public interface CommentService {

    Comment save(Comment comment);

    List<Comment> findAll();

    Comment findById(Long commentId);

    void updateReplyComment(ReplyComment replyComment, Comment comment, User user);

    Comment findOne(Long commentId);
}
