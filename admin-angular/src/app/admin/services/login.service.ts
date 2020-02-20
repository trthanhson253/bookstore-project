import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { User } from "../models/user";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public currentUser: User;

  constructor(private http: Http) {}

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

  register(user: User) {
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(
      AppConst.UserPath + "/registration",
      JSON.stringify(user),
      { headers: headers }
    );
  }
}
