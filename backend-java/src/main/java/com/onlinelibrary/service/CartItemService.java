package com.onlinelibrary.service;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.CartItem;
import com.onlinelibrary.entity.ShoppingCart;
import com.onlinelibrary.entity.User;

import java.util.List;

public interface CartItemService {
    CartItem addBookToCartItem(Book book, User user, int qty);

    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);

//	List<CartItem> findByOrder(Order order);

    CartItem updateCartItem(CartItem cartItem);

    void removeCartItem(CartItem cartItem);

    CartItem findById(Long id);

    CartItem save(CartItem cartItem);
}
