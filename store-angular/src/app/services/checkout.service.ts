import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { User } from "../models/user";
import { OrderShippingAddress } from "../models/order-shipping-address";
import { OrderBillingAddress } from "../models/order-billing-address";
import { OrderPayment } from "../models/order-payment";

@Injectable({
  providedIn: "root"
})
export class CheckoutService {
  tokenHeader: Headers;
  private currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  checkout(
    orderShippingAddress: OrderShippingAddress,
    orderBillingAddress: OrderBillingAddress,
    orderPayment: OrderPayment,
    shippingMethod: string
  ) {
    let url = AppConst.UserPath + "/checkout";
    let order = {
      orderShippingAddress: orderShippingAddress,
      orderBillingAddress: orderBillingAddress,
      orderPayment: orderPayment,
      shippingMethod: shippingMethod
    };
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, order, { headers: this.tokenHeader });
  }
}
