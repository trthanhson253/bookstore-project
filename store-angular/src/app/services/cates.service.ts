import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";

@Injectable({
  providedIn: "root"
})
export class CatesService {
  headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers({
      "Content-Type": "application/json; charset=UTF-8"
    });
  }

  getCatesList() {
    let url = AppConst.AdminPath + "/cates/all";

    return this.http.get(url, { headers: this.headers });
  }

  getCatesDetail(id:number) {
    let url = AppConst.AdminPath + "/cates/"+id;

    return this.http.get(url, { headers: this.headers });
  }
}
