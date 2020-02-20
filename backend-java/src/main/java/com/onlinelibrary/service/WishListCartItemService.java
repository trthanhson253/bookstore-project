package com.onlinelibrary.service;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.User;
import com.onlinelibrary.entity.WishListCart;
import com.onlinelibrary.entity.WishListCartItem;

import java.util.List;

public interface WishListCartItemService {
    WishListCartItem addBookToWishListCartItem(Book book, User user);

    List<WishListCartItem> findByWishListCart(WishListCart wishListCart);

    void removeWishListCartItem(WishListCartItem wishListCartItem);

    WishListCartItem findById(Long wishListCartItemId);

}
