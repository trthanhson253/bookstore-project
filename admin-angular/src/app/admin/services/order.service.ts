import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { AppConst } from "../constants/app-constants";
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  tokenHeader: Headers;
  public currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  getOrderList() {
    let url = AppConst.UserPath + "/order/all";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.get(url, { headers: this.tokenHeader });
  }
}
