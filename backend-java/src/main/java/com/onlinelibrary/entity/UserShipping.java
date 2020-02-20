package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class UserShipping extends BaseEntity {

    private String userShippingName;
    private String userShippingStreet;
    private String userShippingCity;
    private String userShippingState;
    private String userShippingCountry;
    private String userShippingZipcode;
    private Boolean userShippingDefault;

    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonIgnore
    private User user;

    public String getUserShippingName() {
        return userShippingName;
    }

    public void setUserShippingName(String userShippingName) {
        this.userShippingName = userShippingName;
    }

    public String getUserShippingStreet() {
        return userShippingStreet;
    }

    public void setUserShippingStreet(String userShippingStreet) {
        this.userShippingStreet = userShippingStreet;
    }

    public String getUserShippingCity() {
        return userShippingCity;
    }

    public void setUserShippingCity(String userShippingCity) {
        this.userShippingCity = userShippingCity;
    }

    public String getUserShippingState() {
        return userShippingState;
    }

    public void setUserShippingState(String userShippingState) {
        this.userShippingState = userShippingState;
    }

    public String getUserShippingCountry() {
        return userShippingCountry;
    }

    public void setUserShippingCountry(String userShippingCountry) {
        this.userShippingCountry = userShippingCountry;
    }

    public String getUserShippingZipcode() {
        return userShippingZipcode;
    }

    public void setUserShippingZipcode(String userShippingZipcode) {
        this.userShippingZipcode = userShippingZipcode;
    }

    public Boolean getUserShippingDefault() {
        return userShippingDefault;
    }

    public void setUserShippingDefault(Boolean userShippingDefault) {
        this.userShippingDefault = userShippingDefault;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
