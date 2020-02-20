package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.UserPaymentRepository;
import com.onlinelibrary.dao.UserRepository;
import com.onlinelibrary.dao.UserShippingRepository;
import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserShippingRepository userShippingRepository;

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        newUser.setName(newUser.getName());
        newUser.setEmail(newUser.getEmail());
        newUser.setConfirmEmail("");
        newUser.setConfirmPassword("");
        newUser.setRole(Role.USER);

        ShoppingCart shoppingCart=new ShoppingCart();
        shoppingCart.setUser(newUser);
        newUser.setShoppingCart(shoppingCart);

        WishListCart wishListCart = new WishListCart();
        wishListCart.setUser(newUser);
        newUser.setWishListCart(wishListCart);

        newUser.setUserPaymentList(new ArrayList<UserPayment>());
        newUser.setUserShippingList(new ArrayList<UserShipping>());
        return userRepository.save(newUser);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findOne(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User findByName(String name) {
        return userRepository.findByName(name);
    }

    @Override
    public List<User> findAllUsers() {
        List<User> allUsers = (List<User>) userRepository.findAll();
        return allUsers;
    }

    @Override
    public void updateUserPayment(UserPayment userPayment, User user) {
        userPayment.setUser(user);
        userPayment.setDefaultPayment(false);
        user.getUserPaymentList().add(userPayment);
        save(user);
    }

    @Override
    public void updateUserShipping(UserShipping userShipping, User user) {
        userShipping.setUser(user);
        userShipping.setUserShippingDefault(false);
        user.getUserShippingList().add(userShipping);
        save(user);
    }

    @Override
    public void setUserDefaultShipping(Long userShippingId, User user) {
        List<UserShipping> userShippingList = (List<UserShipping>) userShippingRepository.findAll();

        for (UserShipping userShipping : userShippingList) {
            if(userShipping.getId() == userShippingId) {
                userShipping.setUserShippingDefault(true);
                userShippingRepository.save(userShipping);
            } else {
                userShipping.setUserShippingDefault(false);
                userShippingRepository.save(userShipping);
            }
        }
    }

    @Override
    public void setUserDefaultPayment(Long userPaymentId, User user) {
        List<UserPayment> userPaymentList = (List<UserPayment>) userPaymentRepository.findAll();

        for (UserPayment userPayment : userPaymentList) {
            if(userPayment.getId() == userPaymentId) {
                userPayment.setDefaultPayment(true);
                userPaymentRepository.save(userPayment);
            } else {
                userPayment.setDefaultPayment(false);
                userPaymentRepository.save(userPayment);
            }
        }
    }
}
