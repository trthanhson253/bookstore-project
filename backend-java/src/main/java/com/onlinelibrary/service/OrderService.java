package com.onlinelibrary.service;

import com.onlinelibrary.entity.*;

import java.util.List;

public interface OrderService {
    Order createOrder(
            ShoppingCart shoppingCart,
            OrderShippingAddress orderShippingAddress,
            OrderBillingAddress orderBillingAddress,
            OrderPayment orderPayment,
            String shippingMethod,
            User user
    );

    List<Order> findAll();

    Order findOne(Long id);
}
