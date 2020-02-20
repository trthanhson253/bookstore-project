package com.onlinelibrary.dao;

import com.onlinelibrary.entity.CartItem;
import com.onlinelibrary.entity.ShoppingCart;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CartItemRepository extends CrudRepository<CartItem, Long> {

    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
}
