import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { User } from "../models/user";
import { AppConst } from "../constants/app-constants";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  currentUser: User;
  tokenHeaders: Headers;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.tokenHeaders = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
  }

  getUsersList() {
    let url = AppConst.UserPath + "/all";
    return this.http.get(url, { headers: this.tokenHeaders });
  }

  sendUser(user: User) {
    return this.http.post(AppConst.UserPath + "/add", user, {
      headers: this.tokenHeaders
    });
  }
}
