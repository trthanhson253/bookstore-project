import { Injectable } from "@angular/core";
import { Cates } from "../models/cates";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class CatesService {
  headers: Headers;
  currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.headers = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
  }

  getCatesList() {
    let url = AppConst.AdminPath + "/cates/all";

    return this.http.get(url, { headers: this.headers });
  }

  deleteCates(id: number) {
    let url = AppConst.AdminPath + "/cates/delete/" + id;

    return this.http.delete(url, { headers: this.headers });
  }

  sendCates(cates: Cates) {
    let url = AppConst.AdminPath + "/cates/add";

    return this.http.post(url, JSON.stringify(cates), {
      headers: this.headers
    });
  }
}
