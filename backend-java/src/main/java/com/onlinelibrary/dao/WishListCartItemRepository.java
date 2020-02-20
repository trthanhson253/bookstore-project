package com.onlinelibrary.dao;

import com.onlinelibrary.entity.UserShipping;
import com.onlinelibrary.entity.WishListCart;
import com.onlinelibrary.entity.WishListCartItem;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WishListCartItemRepository extends CrudRepository<WishListCartItem,Long> {
    List<WishListCartItem> findByWishListCart(WishListCart wishListCart);


}
