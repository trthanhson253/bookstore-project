package com.onlinelibrary.service;

import com.onlinelibrary.entity.UserPayment;

public interface UserPaymentService {
    UserPayment findById(Long id);

    void removeById(Long id);
}
