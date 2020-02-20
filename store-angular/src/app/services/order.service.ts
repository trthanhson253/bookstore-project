import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  tokenHeader: Headers;
  private currentUser: User;
  constructor(private http:Http) { 
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
  }

  getOrderList() {
  	let url = AppConst.UserPath +"/order/getOrderList";

  	return this.http.get(url, {headers: this.tokenHeader});
  }
}
