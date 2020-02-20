package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class WishListCart extends BaseEntity {

    @OneToMany(mappedBy ="wishListCart")
    @JsonIgnore
    private List<Book> bookList;

    @OneToOne
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "wishListCart", cascade= CascadeType.ALL, fetch= FetchType.LAZY)
    @JsonIgnore
    private List<WishListCartItem> wishListCartItemList;

    public List<WishListCartItem> getWishListCartItemList() {
        return wishListCartItemList;
    }

    public void setWishListCartItemList(List<WishListCartItem> wishListCartItemList) {
        this.wishListCartItemList = wishListCartItemList;
    }

    public List<Book> getBookList() {
        return bookList;
    }

    public void setBookList(List<Book> bookList) {
        this.bookList = bookList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
