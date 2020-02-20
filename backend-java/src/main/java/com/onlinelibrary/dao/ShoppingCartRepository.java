package com.onlinelibrary.dao;

import com.onlinelibrary.entity.ShoppingCart;
import org.springframework.data.repository.CrudRepository;

public interface ShoppingCartRepository extends CrudRepository<ShoppingCart,Long> {

}
