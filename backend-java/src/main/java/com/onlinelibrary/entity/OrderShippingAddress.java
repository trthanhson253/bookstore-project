package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class OrderShippingAddress extends BaseEntity {

    private String shippingAddressName;
    private String shippingAddressStreet;
    private String shippingAddressCity;
    private String shippingAddressState;
    private String shippingAddressCountry;
    private String shippingAddressZipcode;

    @OneToOne
    @JsonIgnore
    private Order order;

    public String getShippingAddressName() {
        return shippingAddressName;
    }

    public void setShippingAddressName(String shippingAddressName) {
        this.shippingAddressName = shippingAddressName;
    }

    public String getShippingAddressStreet() {
        return shippingAddressStreet;
    }

    public void setShippingAddressStreet(String shippingAddressStreet) {
        this.shippingAddressStreet = shippingAddressStreet;
    }

    public String getShippingAddressCity() {
        return shippingAddressCity;
    }

    public void setShippingAddressCity(String shippingAddressCity) {
        this.shippingAddressCity = shippingAddressCity;
    }

    public String getShippingAddressState() {
        return shippingAddressState;
    }

    public void setShippingAddressState(String shippingAddressState) {
        this.shippingAddressState = shippingAddressState;
    }

    public String getShippingAddressCountry() {
        return shippingAddressCountry;
    }

    public void setShippingAddressCountry(String shippingAddressCountry) {
        this.shippingAddressCountry = shippingAddressCountry;
    }

    public String getShippingAddressZipcode() {
        return shippingAddressZipcode;
    }

    public void setShippingAddressZipcode(String shippingAddressZipcode) {
        this.shippingAddressZipcode = shippingAddressZipcode;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
