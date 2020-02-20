import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { User } from '../models/user';
import { AppConst } from '../constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class WishlistCartService {
  tokenHeader: Headers;
  private currentUser: User;

  constructor(private http:Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
   }

   
   addWishListItem(bookId:number) {
  	let url = AppConst.UserPath +"/wishlistcart/add";
  	
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
    return this.http.post(url, bookId, {headers: this.tokenHeader});
  }

  getWishListCartItem() {
  	let url = AppConst.UserPath +"/wishlistcart/getWishListCartItemList";
  	
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
    return this.http.get(url, {headers: this.tokenHeader});
  }

  removeWishListCartItem(wishListCartItemId: number) {
  	let url = AppConst.UserPath +"/wishlistcart/removeItem";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
  	return this.http.post(url, wishListCartItemId, {headers: this.tokenHeader});
  }
}
