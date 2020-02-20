import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isLogin: boolean = false;
  private isUser: boolean = false;
  getIsLogin() {
    return this.isLogin;
  }

  checkLogin() {
    var localUser = localStorage.getItem("currentUser");
    if (localUser) {
      this.isLogin = true;
      return JSON.parse(localUser);
    } else {
      this.isLogin = false;
    }
  }

  getIsUser() {
    return this.isUser;
  }

  checkUser() {
    let localUser = this.checkLogin();
    if (localUser) {
      if (localUser.role === "USER") {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    }
  }

  constructor() {}
}
