package com.onlinelibrary.dao;

import com.onlinelibrary.entity.Comment;
import com.onlinelibrary.entity.Likes;
import com.onlinelibrary.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LikesRepository extends CrudRepository<Likes,Long> {
//    List<Likes> findByUser(User user);

    List<Likes> findByComment(Comment comment);

    List<Likes> findByUser(User user);

    @Query(nativeQuery=true,value="SELECT likes.user_id FROM likes where comment_id= :commentId")
    List<Long> findUserByCommentId(Long commentId);
}
