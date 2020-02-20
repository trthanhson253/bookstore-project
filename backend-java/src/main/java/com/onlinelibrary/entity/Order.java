package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.*;


@Entity
@Table(name = "user_order")
public class Order extends BaseEntity {
    private Date orderDate;
    private Date shippingDate;
    private String shippingMethod;
    private String orderStatus;
    private BigDecimal orderTotal;

    @OneToMany(mappedBy = "order", cascade=CascadeType.ALL)
    private List<CartItem> cartItemList;

    @OneToOne(cascade=CascadeType.ALL)
    private OrderShippingAddress orderShippingAddress;

    @OneToOne(cascade=CascadeType.ALL)
    private OrderBillingAddress orderBillingAddress;

    @OneToOne(cascade=CascadeType.ALL)
    private OrderPayment orderPayment;

    @ManyToOne
    @JsonIgnore
    private User user;

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getShippingDate() {
        return shippingDate;
    }

    public void setShippingDate(Date shippingDate) {
        this.shippingDate = shippingDate;
    }

    public String getShippingMethod() {
        return shippingMethod;
    }

    public void setShippingMethod(String shippingMethod) {
        this.shippingMethod = shippingMethod;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public BigDecimal getOrderTotal() {
        return orderTotal;
    }

    public void setOrderTotal(BigDecimal orderTotal) {
        this.orderTotal = orderTotal;
    }

    public List<CartItem> getCartItemList() {
        return cartItemList;
    }

    public void setCartItemList(List<CartItem> cartItemList) {
        this.cartItemList = cartItemList;
    }

    public OrderShippingAddress getOrderShippingAddress() {
        return orderShippingAddress;
    }

    public void setOrderShippingAddress(OrderShippingAddress orderShippingAddress) {
        this.orderShippingAddress = orderShippingAddress;
    }

    public OrderBillingAddress getOrderBillingAddress() {
        return orderBillingAddress;
    }

    public void setOrderBillingAddress(OrderBillingAddress orderBillingAddress) {
        this.orderBillingAddress = orderBillingAddress;
    }

    public OrderPayment getOrderPayment() {
        return orderPayment;
    }

    public void setOrderPayment(OrderPayment orderPayment) {
        this.orderPayment = orderPayment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
