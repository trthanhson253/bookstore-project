package com.onlinelibrary.service;

import com.onlinelibrary.entity.ShoppingCart;

public interface ShoppingCartService {
    ShoppingCart updateShoppingCart(ShoppingCart shoppingCart);

    void clearShoppingCart(ShoppingCart shoppingCart);
}
