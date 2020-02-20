package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.WishListCartItemRepository;
import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.WishListCartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishListCartItemServiceImpl implements WishListCartItemService {
    @Autowired
    private WishListCartItemRepository wishListCartItemRepository;

    @Override
    public WishListCartItem addBookToWishListCartItem(Book book, User user) {
        List<WishListCartItem> wishListCartItemList = findByWishListCart(user.getWishListCart());

        for (WishListCartItem wishListCartItem : wishListCartItemList) {
            if (book.getId() == wishListCartItem.getBook().getId()) {
//                cartItem.setQty(cartItem.getQty()+qty);
//                cartItem.setSubtotal(new BigDecimal(book.getOurPrice()).multiply(new BigDecimal(qty)));
//                cartItemRepository.save(cartItem);
                return null;
            }
        }
        WishListCartItem wishListCartItem = new WishListCartItem();
        wishListCartItem.setWishListCart(user.getWishListCart());
        wishListCartItem.setBook(book);

        wishListCartItem =wishListCartItemRepository.save(wishListCartItem);

        return wishListCartItem;
    }

    @Override
    public List<WishListCartItem> findByWishListCart(WishListCart wishListCart) {
        return wishListCartItemRepository.findByWishListCart(wishListCart);
    }

    @Override
    public void removeWishListCartItem(WishListCartItem wishListCartItem) {
        wishListCartItemRepository.delete(wishListCartItem);
    }

    @Override
    public WishListCartItem findById(Long id) {
        return wishListCartItemRepository.findById(id).get();
    }
}
