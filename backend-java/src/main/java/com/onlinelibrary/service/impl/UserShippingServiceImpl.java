package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.UserShippingRepository;
import com.onlinelibrary.entity.User;
import com.onlinelibrary.entity.UserShipping;
import com.onlinelibrary.service.UserShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserShippingServiceImpl implements UserShippingService {

    @Autowired
    private UserShippingRepository userShippingRepository;

    @Override
    public UserShipping findById(Long id) {
        return userShippingRepository.findById(id).get();
    }

    @Override
    public void removeById(Long id) {
        userShippingRepository.deleteById(id);
    }


}
