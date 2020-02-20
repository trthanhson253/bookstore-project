import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";

@Injectable({
  providedIn: "root"
})
export class BookService {
  headers: Headers;
  
  constructor(private http: Http) {
    this.headers = new Headers({
      "Content-Type": "application/json; charset=UTF-8"
    });
  }

  getAllBooks(){
    let url=AppConst.AdminPath+"/books/all";
    return this.http.get(url, { headers: this.headers });
  }

  getBookListByCategory(id: number) {
    let url = AppConst.AdminPath + "/cates/list/" + id;

    return this.http.get(url, { headers: this.headers });
  }

  searchBook(keyword:string,searchOption:string){
    let url=AppConst.AdminPath+"/books/searchBook"
    let searchInfo={
      "keyword":keyword,
      "searchOption":searchOption
    }
    return this.http.post(url, JSON.stringify(searchInfo), { headers: this.headers });
  }

  sortBy(keyword:string){
    let url=AppConst.AdminPath+"/books/sortBy"
    return this.http.post(url, keyword, { headers: this.headers });
  }

  relatedBooks(id:number){
    let url=AppConst.AdminPath+"/books/relatedBooks/"+id
    return this.http.get(url, { headers: this.headers });
  }

  getCurrentBook(id:number){
    let url=AppConst.AdminPath+"/books/"+id;
    return this.http.get(url, { headers: this.headers });
  }
}
