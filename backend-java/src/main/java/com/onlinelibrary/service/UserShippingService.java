package com.onlinelibrary.service;

import com.onlinelibrary.entity.User;
import com.onlinelibrary.entity.UserShipping;

public interface UserShippingService {
    UserShipping findById(Long id);

    void removeById(Long id);


}
