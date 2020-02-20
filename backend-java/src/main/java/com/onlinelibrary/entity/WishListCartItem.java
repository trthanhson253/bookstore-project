package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class WishListCartItem extends BaseEntity {

    @OneToOne
    private Book book;

    @ManyToOne
    @JoinColumn(name="wishlist_cart_id")
    @JsonIgnore
    private WishListCart wishListCart;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public WishListCart getWishListCart() {
        return wishListCart;
    }

    public void setWishListCart(WishListCart wishListCart) {
        this.wishListCart = wishListCart;
    }
}
