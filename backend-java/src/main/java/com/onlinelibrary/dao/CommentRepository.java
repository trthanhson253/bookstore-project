package com.onlinelibrary.dao;

import com.onlinelibrary.entity.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment,Long> {
}
