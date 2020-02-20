import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private tokenHeader: Headers;
  private currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
  }

  register(user: User) {
    let headers = new Headers({
      "Content-Type": "application/json; charset=UTF-8"
    });
    return this.http.post(AppConst.UserPath + "/add", user, {
      headers: headers
    });
  }

  getCurrentUser() {
    let url = AppConst.UserPath + "/getCurrentUser";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.get(url, { headers: this.tokenHeader });
  }

  updateName(name: string) {
    let url = AppConst.UserPath + "/updateName";

    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, name, {
      headers: this.tokenHeader
    });
  }

  updateEmail(email: string) {
    let url = AppConst.UserPath + "/updateEmail";
   
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, email, {
      headers: this.tokenHeader
    });
  }

  changePassword(
    newPassword: string,
    currentPassword: string,
    retypePassword: string
  ) {
    let url = AppConst.UserPath + "/changePassword";
    let passwordInfo = {
      currentPassword: currentPassword,
      newPassword: newPassword,
      retypePassword: retypePassword
    };
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    return this.http.post(url, JSON.stringify(passwordInfo), {
      headers: this.tokenHeader
    });
  }
}
