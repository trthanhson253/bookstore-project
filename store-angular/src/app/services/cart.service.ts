import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  tokenHeader: Headers;
  private currentUser: User;
  constructor(private http:Http) { 
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
   
  }

  addItem(id:number, qty: number) {
  	let url = AppConst.UserPath +"/cart/add";
  	let cartItemInfo = {
  		"bookId" : id,
  		"qty" : qty
  	}
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
    return this.http.post(url, cartItemInfo, {headers: this.tokenHeader});
  }

  getCartItemList() {
  	let url = AppConst.UserPath +"/cart/getCartItemList";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
  	return this.http.get(url, {headers: this.tokenHeader});
  }

  getShoppingCart() {
  	let url = AppConst.UserPath +"/cart/getShoppingCart";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
  	return this.http.get(url, {headers: this.tokenHeader});
  }

  updateCartItem(cartItemId: number, qty: number) {
  	let url = AppConst.UserPath +"/cart/updateCartItem";
  	let cartItemInfo = {
  		"cartItemId" : cartItemId,
  		"qty" : qty
  	}
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
  	return this.http.post(url, cartItemInfo, {headers: this.tokenHeader});
  }

  removeCartItem(id: number) {
  	let url = AppConst.UserPath +"/cart/removeItem";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + this.currentUser.token
    });
  	return this.http.post(url, id, {headers: this.tokenHeader});
  }
}
