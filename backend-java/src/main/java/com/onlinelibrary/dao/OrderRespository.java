package com.onlinelibrary.dao;

import com.onlinelibrary.entity.Order;
import com.onlinelibrary.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRespository extends CrudRepository<Order, Long> {
        List<Order> findByUser(User user);

}
