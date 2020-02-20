import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { User } from "../models/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public currentUser: User;
  headers1: Headers;
  constructor(private http: Http) {
    this.headers1 = new Headers({
      "Content-Type": "application/json; charset=UTF-8"
    });
  }

  login(user: User) {
    let url = AppConst.UserPath + "/login";
    let headers = new Headers({
      Authorization: "Basic " + btoa(user.username + ":" + user.password)
    });
    return this.http.get(url, { headers: headers });
  }

  logout() {
    let url = AppConst.UserPath + "/logout";
    return this.http.post(url, {}).pipe(
      map(response => {
        localStorage.removeItem("currentUser");
        return response;
      })
    );
  }

  retrievePassword(email: string) {
    let url = AppConst.UserPath + "/forgotPassword";
    return this.http.post(url, email, { headers: this.headers1 });
  }
}
