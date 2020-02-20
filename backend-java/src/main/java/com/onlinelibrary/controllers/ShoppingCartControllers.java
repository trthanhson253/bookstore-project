package com.onlinelibrary.controllers;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.CartItem;
import com.onlinelibrary.entity.ShoppingCart;
import com.onlinelibrary.entity.User;
import com.onlinelibrary.service.BooksService;
import com.onlinelibrary.service.CartItemService;
import com.onlinelibrary.service.ShoppingCartService;
import com.onlinelibrary.service.UserService;
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
@RequestMapping(value ="/api/user/cart")
public class ShoppingCartControllers {
    @Autowired
    private UserService userService;

    @Autowired
    private BooksService booksService;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private ShoppingCartService shoppingCartService;

    @RequestMapping("/add")
    public ResponseEntity addItem (
            @RequestBody HashMap<String, String> mapper, Principal principal
    ){
        String bookId = (String) mapper.get("bookId");
        String qty = (String) mapper.get("qty");

        User user = userService.findByUsername(principal.getName());
        Book book = booksService.findOne(Long.parseLong(bookId));

        if(Integer.parseInt(qty) > book.getInStockNumber()) {
            return new ResponseEntity("Not Enough Stock!", HttpStatus.BAD_REQUEST);
        }

        CartItem cartItem = cartItemService.addBookToCartItem(book, user, Integer.parseInt(qty));

        return new ResponseEntity("Book Added Successfully!", HttpStatus.OK);
    }

    @RequestMapping("/getCartItemList")
    public List<CartItem> getCartItemList(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        ShoppingCart shoppingCart = user.getShoppingCart();

        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        shoppingCartService.updateShoppingCart(shoppingCart);

        return cartItemList;
    }

    @RequestMapping("/getShoppingCart")
    public ShoppingCart getShoppingCart(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        ShoppingCart shoppingCart = user.getShoppingCart();

        shoppingCartService.updateShoppingCart(shoppingCart);

        return shoppingCart;
    }

    @RequestMapping("/removeItem")
    public ResponseEntity removeItem(@RequestBody String id) {
        cartItemService.removeCartItem(cartItemService.findById(Long.parseLong(id)));

        return new ResponseEntity("Cart Item Removed Successfully!", HttpStatus.OK);
    }

    @RequestMapping("/updateCartItem")
    public ResponseEntity updateCartItem(
            @RequestBody HashMap<String, String> mapper
    ){
        String cartItemId = mapper.get("cartItemId");
        String qty = mapper.get("qty");

        CartItem cartItem = cartItemService.findById(Long.parseLong(cartItemId));
        cartItem.setQty(Integer.parseInt(qty));

        if(Integer.parseInt(qty) > cartItem.getBook().getInStockNumber()) {
            return new ResponseEntity("Not Enough Stock!", HttpStatus.BAD_REQUEST);
        }

        cartItemService.updateCartItem(cartItem);

        return new ResponseEntity("Cart Item Updated Successfully!", HttpStatus.OK);
    }
}
