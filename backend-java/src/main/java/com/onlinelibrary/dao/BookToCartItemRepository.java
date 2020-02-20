package com.onlinelibrary.dao;

import com.onlinelibrary.entity.BookToCartItem;
import com.onlinelibrary.entity.CartItem;
import org.springframework.data.repository.CrudRepository;

public interface BookToCartItemRepository extends CrudRepository<BookToCartItem, Long> {
    void deleteByCartItem(CartItem cartItem);
}