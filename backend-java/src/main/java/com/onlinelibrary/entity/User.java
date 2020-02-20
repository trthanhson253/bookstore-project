package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name="user")
public class User extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Column(name="username")
    @NotBlank(message = "Username field is required")
    private String username;

    @Column(name="password")
    @NotBlank(message = "Password field is required")
    private String password;

    @Transient
    private String confirmPassword;

    @Column(name="email")
    @NotBlank(message = "Email field is required")
    private String email;

    @Transient
    private String confirmEmail;

    @Enumerated(EnumType.STRING)
    @Column(name="role")
    private Role role;

    @Transient
    private String token;

    @Transient
    private MultipartFile userImage;

    @OneToMany(cascade=CascadeType.ALL, mappedBy = "user")
    private List<UserPayment> userPaymentList;

    @OneToMany(cascade=CascadeType.ALL, mappedBy = "user")
    private List<UserShipping> userShippingList;

    @OneToOne(cascade=CascadeType.ALL, mappedBy = "user")
    private ShoppingCart shoppingCart;

    @OneToMany(mappedBy="user")
    private List<Order> orderList;

    @OneToOne(cascade=CascadeType.ALL, mappedBy = "user")
    private WishListCart wishListCart;

//    @OneToMany(mappedBy="user")
//    private List<Comment> commentList;

    @OneToMany(mappedBy = "user", cascade= CascadeType.ALL, fetch= FetchType.LAZY)
    @JsonIgnore
    private List<Likes> likesList;

    public List<Likes> getLikesList() {
        return likesList;
    }

    public void setLikesList(List<Likes> likesList) {
        this.likesList = likesList;
    }

    public WishListCart getWishListCart() {
        return wishListCart;
    }

    public void setWishListCart(WishListCart wishListCart) {
        this.wishListCart = wishListCart;
    }

    public List<Order> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<Order> orderList) {
        this.orderList = orderList;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public List<UserShipping> getUserShippingList() {
        return userShippingList;
    }

    public void setUserShippingList(List<UserShipping> userShippingList) {
        this.userShippingList = userShippingList;
    }

    public List<UserPayment> getUserPaymentList() {
        return userPaymentList;
    }

    public void setUserPaymentList(List<UserPayment> userPaymentList) {
        this.userPaymentList = userPaymentList;
    }

    public MultipartFile getUserImage() {
        return userImage;
    }

    public void setUserImage(MultipartFile userImage) {
        this.userImage = userImage;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getConfirmEmail() {
        return confirmEmail;
    }

    public void setConfirmEmail(String confirmEmail) {
        this.confirmEmail = confirmEmail;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }


}
