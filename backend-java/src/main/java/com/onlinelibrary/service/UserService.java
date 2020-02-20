package com.onlinelibrary.service;

import com.onlinelibrary.entity.User;
import com.onlinelibrary.entity.UserPayment;
import com.onlinelibrary.entity.UserShipping;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    User findByUsername(String username);

    User save(User user);

    User findOne(Long id);

    User findByEmail(String email);

    User findByName(String name);

    List<User> findAllUsers();

    void updateUserPayment(UserPayment userPayment,User user);

    void updateUserShipping(UserShipping userShipping,User user);

    void setUserDefaultShipping(Long userShippingId, User user);

    void setUserDefaultPayment(Long userPaymentId, User user);
}
