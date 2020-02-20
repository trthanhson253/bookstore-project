package com.onlinelibrary.controllers;

import com.onlinelibrary.entity.*;
import com.onlinelibrary.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(value ="/api/user/wishlistcart")
public class WishListCartControllers {

    @Autowired
    private UserService userService;

    @Autowired
    private BooksService booksService;

    @Autowired
    private WishListCartItemService wishListCartItemService;

    @RequestMapping("/add")
    public ResponseEntity addWishListItem (
            @RequestBody Long bookId, Principal principal
    ){

        User user = userService.findByUsername(principal.getName());
        Book book = booksService.findOne(bookId);

        WishListCartItem wishListCartItem = wishListCartItemService.addBookToWishListCartItem(book, user);
        if(wishListCartItem!=null){
            return new ResponseEntity("Book Added To WishList Cart Successfully!", HttpStatus.OK);
        }else{
            return new ResponseEntity("Failed!", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping("/getWishListCartItemList")
    public List<WishListCartItem> getWishListCartItemList(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        WishListCart wishListCart = user.getWishListCart();

        List<WishListCartItem> wishListCartItemList = wishListCartItemService.findByWishListCart(wishListCart);

//        wishListCartService.updateWishListCart(shoppingCart);

        return wishListCartItemList;
    }

    @RequestMapping("/removeItem")
    public ResponseEntity removeWishListCartItem(@RequestBody String wishListCartItemId) {
        WishListCartItem wishListCartItem = wishListCartItemService.findById(Long.parseLong(wishListCartItemId));
        wishListCartItemService.removeWishListCartItem(wishListCartItem);

        return new ResponseEntity("Cart Item Removed Successfully!", HttpStatus.OK);
    }


}
