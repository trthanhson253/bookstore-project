package com.onlinelibrary.service;

import com.onlinelibrary.entity.Comment;
import com.onlinelibrary.entity.Likes;
import com.onlinelibrary.entity.User;

import java.util.List;

public interface LikesService {

    void addLikesToComment(Comment comment, User user);

    List<Likes> findByUser(User user);

    List<Long> findUserByCommentId(Long commentId);
}
