package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.UserPaymentRepository;
import com.onlinelibrary.entity.UserPayment;
import com.onlinelibrary.service.UserPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserPaymentServiceImpl implements UserPaymentService {
    @Autowired
    private UserPaymentRepository userPaymentRepository;
    @Override
    public UserPayment findById(Long id) {
        return userPaymentRepository.findById(id).get() ;
    }

    @Override
    public void removeById(Long id) {
         userPaymentRepository.deleteById(id);
    }
}
