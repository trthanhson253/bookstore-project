import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Books } from "../models/books";
import { AppConst } from "../constants/app-constants";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  headers: Headers;
  currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.headers = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
  }

  getBooksList() {
    let url = AppConst.AdminPath + "/books/all";

    return this.http.get(url, { headers: this.headers });
  }

  deleteBook(id: number) {
    let url = AppConst.AdminPath + "/books/delete";

    return this.http.post(url, JSON.stringify(id), { headers: this.headers });
  }

  sendBook(book: Books, cateId: number) {
    let url = AppConst.AdminPath + "/books/add/"+cateId;
    // let bookContent = {
    //   book: book,
    //   cateId: cateId
    // };

    return this.http.post(url, book, { headers: this.headers });
  }
}
