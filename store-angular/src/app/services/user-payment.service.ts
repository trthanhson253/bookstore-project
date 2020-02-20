import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { UserPayment } from "../models/user-payment";

@Injectable({
  providedIn: "root"
})
export class UserPaymentService {
  private tokenHeader: Headers;
  private currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  addNewCard(userPayment: UserPayment) {
    let url = AppConst.UserPath + "/payment/add";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, JSON.stringify(userPayment), {
      headers: this.tokenHeader
    });
  }

  getUserPaymentList() {
    let url = AppConst.UserPath + "/payment/getCurrentUserPaymentList";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.get(url, {
      headers: this.tokenHeader
    });
  }

  deleteMyCard(id: number) {
    let url = AppConst.UserPath + "/payment/delete";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, id, {
      headers: this.tokenHeader
    });
  }

  setDefaultPayment (id: number) {
  	let url = AppConst.UserPath+"/payment/setDefault";

    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
  	return this.http.post(url, id, {headers: this.tokenHeader});
  }
}
