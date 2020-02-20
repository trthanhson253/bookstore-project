package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.CommentRepository;
import com.onlinelibrary.dao.LikesRepository;
import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.LikesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikesServiceImpl implements LikesService {
    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public void addLikesToComment(Comment comment, User user) {
        List<Likes> likesList = findByComment(comment);
        if(likesList.size() == 0){
            Likes newLikes = new Likes();
            newLikes.setComment(comment);
            newLikes.setUser(user);
            comment.getLikesList().add(newLikes);
            likesRepository.save(newLikes);
            commentRepository.save(comment);
        }
        List<Likes> likesList1 = findByComment(comment);
        for (Likes likes : likesList1) {
            if (likes.getUser().getId() == user.getId()) {
                likesRepository.delete(likes);
            }
        }
        Likes newLikes1 = new Likes();
        newLikes1.setComment(comment);
        newLikes1.setUser(user);
        likesRepository.save(newLikes1);
    }

    @Override
    public List<Likes> findByUser(User user) {
        return likesRepository.findByUser(user);
    }

    @Override
    public List<Long> findUserByCommentId(Long commentId) {
        return likesRepository.findUserByCommentId(commentId);
    }

    public List<Likes> findByComment(Comment comment) {
        return likesRepository.findByComment(comment);
    }
}
