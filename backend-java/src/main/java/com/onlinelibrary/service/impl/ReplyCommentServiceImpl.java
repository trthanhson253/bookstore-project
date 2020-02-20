package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.ReplyCommentRepository;
import com.onlinelibrary.entity.ReplyComment;
import com.onlinelibrary.service.ReplyCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReplyCommentServiceImpl implements ReplyCommentService {
    @Autowired
    private ReplyCommentRepository replyCommentRepository;

    @Override
    public ReplyComment save(ReplyComment replyComment) {
        return replyCommentRepository.save(replyComment);
    }
}
