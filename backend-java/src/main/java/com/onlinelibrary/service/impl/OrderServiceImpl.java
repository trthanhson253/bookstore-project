package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.OrderBillingAddressRepository;
import com.onlinelibrary.dao.OrderPaymentRepository;
import com.onlinelibrary.dao.OrderRespository;
import com.onlinelibrary.dao.OrderShippingAddressRepository;
import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.BooksService;
import com.onlinelibrary.service.CartItemService;
import com.onlinelibrary.service.OrderService;
import com.onlinelibrary.utility.MailConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRespository orderRepository;

    @Autowired
    private OrderBillingAddressRepository orderBillingAddressRepository;

    @Autowired
    private OrderShippingAddressRepository orderShippingAddressRepository;

    @Autowired
    private OrderPaymentRepository orderPaymentRepository;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private BooksService booksService;

    public synchronized  Order createOrder(
            ShoppingCart shoppingCart,
            OrderShippingAddress orderShippingAddress,
            OrderBillingAddress orderBillingAddress,
            OrderPayment orderPayment,
            String shippingMethod,
            User user
    ){
        Order order = new Order();
        order.setOrderBillingAddress(orderBillingAddress);
        order.setOrderStatus("created");
        order.setOrderPayment(orderPayment);
        order.setOrderShippingAddress(orderShippingAddress);
        order.setShippingMethod(shippingMethod);

        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        for (CartItem cartItem : cartItemList) {
            Book book = cartItem.getBook();
            cartItem.setOrder(order);
            book.setInStockNumber(book.getInStockNumber()-cartItem.getQty());
        }

        order.setCartItemList(cartItemList);
        order.setOrderDate(Calendar.getInstance().getTime());
        order.setOrderTotal(shoppingCart.getGrandTotal());
        orderShippingAddress.setOrder(order);
        orderBillingAddress.setOrder(order);
        orderPayment.setOrder(order);
        order.setUser(user);
        order = orderRepository.save(order);

        return order;
    }

    @Override
    public List<Order> findAll() {
        return (List<Order>) orderRepository.findAll();
    }

    public Order findOne(Long id) {
        return orderRepository.findById(id).get();
    }



}
