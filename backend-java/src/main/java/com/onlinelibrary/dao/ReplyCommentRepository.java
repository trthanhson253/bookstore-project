package com.onlinelibrary.dao;

import com.onlinelibrary.entity.Comment;
import com.onlinelibrary.entity.ReplyComment;
import org.springframework.data.repository.CrudRepository;

public interface ReplyCommentRepository extends CrudRepository<ReplyComment,Long> {
}
