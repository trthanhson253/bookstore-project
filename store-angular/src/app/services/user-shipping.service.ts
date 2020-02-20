import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { UserShipping } from "../models/user-shipping";

@Injectable({
  providedIn: "root"
})
export class UserShippingService {
  private tokenHeader: Headers;
  private currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  getUserShippingList() {
    let url = AppConst.UserPath + "/shipping/getCurrentUserShippingList";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.get(url, {
      headers: this.tokenHeader
    });
  }

  addNewAddress(userShipping: UserShipping) {
    let url = AppConst.UserPath + "/shipping/add";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, JSON.stringify(userShipping), {
      headers: this.tokenHeader
    });
  }

  deleteMyAddress(id: number) {
    let url = AppConst.UserPath + "/shipping/delete";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, id, {
      headers: this.tokenHeader
    });
  }

  setDefaultShipping(id: number) {
    let url = AppConst.UserPath + "/shipping/setDefault";

    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, id, { headers: this.tokenHeader });
  }
}
