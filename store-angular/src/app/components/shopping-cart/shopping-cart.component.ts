import { Component, OnInit } from "@angular/core";
import { Books } from "src/app/models/books";
import { CartItem } from "src/app/models/cart-item";
import { ShoppingCart } from "src/app/models/shopping-cart";
import { AppConst } from "src/app/constants/app-constants";
import { Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { Http } from "@angular/http";
import { User } from "src/app/models/user";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  public serverPath = AppConst.AdminPath;
  public selectedBook: Books;
  public cartItemList: CartItem[] = [];
  public cartItemNumber: number;
  public shoppingCart: ShoppingCart = new ShoppingCart();
  public cartItemUpdated: boolean;
  public emptyCart: boolean;
  public notEnoughStock: boolean;

  public currentUser: User;

  constructor(
    public router: Router,
    public http: Http,
    public cartService: CartService
  ) {
    // this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  onSelect(book: Books) {
    this.selectedBook = book;
    this.router.navigate(["/books", this.selectedBook.id]);
  }

  onRemoveCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem.id).subscribe(
      res => {
        
        this.getCartItemList();
        this.getShoppingCart();
      },
      error => {
       
      }
    );
  }

  onUpdateCartItem(cartItem: CartItem) {
    this.cartService.updateCartItem(cartItem.id, cartItem.qty).subscribe(
      res => {
       
        this.cartItemUpdated = true;
        this.getShoppingCart();
        this.getCartItemList();
      },
      error => {
        
        this.notEnoughStock = true;
      }
    );
  }

  getCartItemList() {
    this.cartService.getCartItemList().subscribe(
      res => {
        this.cartItemList = res.json();
        this.cartItemNumber = this.cartItemList.length;
      },
      error => {
       
      }
    );
  }

  getShoppingCart() {
    this.cartService.getShoppingCart().subscribe(
      res => {
       
        this.shoppingCart = res.json();
      },
      error => {
        
      }
    );
  }

  continueCheckout() {
    this.router.navigate(["/check-out"]);
  }
  //   onCheckout() {
  //   	if(this.cartItemNumber==0) {
  //   		this.emptyCart=true;
  //   	} else {
  //   		for (let item of this.cartItemList) {
  //   			if (item.qty > item.book.inStockNumber) {
  //   				
  //   				this.notEnoughStock=true;
  //   				return;
  //   			}
  //   		}
  //   	}
  //   }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (this.currentUser) {
      this.getCartItemList();
      this.getShoppingCart();
    }
  }
}
