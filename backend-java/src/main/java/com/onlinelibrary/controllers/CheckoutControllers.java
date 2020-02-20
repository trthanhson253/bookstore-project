package com.onlinelibrary.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.CartItemService;
import com.onlinelibrary.service.OrderService;
import com.onlinelibrary.service.ShoppingCartService;
import com.onlinelibrary.service.UserService;
import com.onlinelibrary.utility.MailConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/user/checkout")
public class CheckoutControllers {
    private Order order = new Order();

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserService userService;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private ShoppingCartService shoppingCartService;

    @Autowired
    private MailConstructor mailConstructor;

    @PostMapping(value = "")
    public Order checkoutPost(
            @RequestBody HashMap<String, Object> mapper,
            Principal principal
    ){
        ObjectMapper om = new ObjectMapper();

        OrderShippingAddress orderShippingAddress = om.convertValue(mapper.get("orderShippingAddress"), OrderShippingAddress.class);
        OrderBillingAddress orderBillingAddress = om.convertValue(mapper.get("orderBillingAddress"), OrderBillingAddress.class);
        OrderPayment orderPayment = om.convertValue(mapper.get("orderPayment"), OrderPayment.class);
        String shippingMethod = (String) mapper.get("shippingMethod");

        ShoppingCart shoppingCart = userService.findByUsername(principal.getName()).getShoppingCart();
        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
        User user = userService.findByUsername(principal.getName());
        Order order = orderService.createOrder(shoppingCart, orderShippingAddress, orderBillingAddress, orderPayment, shippingMethod, user);

        mailSender.send(mailConstructor.constructOrderConfirmationEmail(user, order, Locale.ENGLISH));

        shoppingCartService.clearShoppingCart(shoppingCart);

        LocalDate today = LocalDate.now();
        LocalDate estimatedDeliveryDate;
        if (shippingMethod.equals("groundShipping")) {
            estimatedDeliveryDate=today.plusDays(5);
        } else {
            estimatedDeliveryDate=today.plusDays(3);
        }

        this.order = order;

        return order;

    }
}
