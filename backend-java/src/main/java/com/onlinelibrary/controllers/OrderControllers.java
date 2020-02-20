package com.onlinelibrary.controllers;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Order;
import com.onlinelibrary.entity.User;
import com.onlinelibrary.service.OrderService;
import com.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/user/order")
public class OrderControllers {
    @Autowired
    private UserService userService;

    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    public List<Order> getOrderList(){
        return orderService.findAll();
    }
    @RequestMapping("/getOrderList")
    public List<Order> getOrderList(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        List<Order> orderList = user.getOrderList();

        return orderList;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrder(@PathVariable("id") Long id){
        Order order = orderService.findOne(id);
        return new ResponseEntity<Order>(order, HttpStatus.OK);
    }
}
