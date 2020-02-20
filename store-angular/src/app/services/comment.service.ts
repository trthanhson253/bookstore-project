import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Http, Headers } from "@angular/http";
import { AppConst } from "../constants/app-constants";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  tokenHeader: Headers;
  private currentUser: User;
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  addComment(commentContent: string, bookId: number) {
    let url = AppConst.UserPath + "/comment/add";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    let info = {
      "bookId": bookId,
      "commentContent": commentContent  
    };
    return this.http.post(url, info, {
      headers: this.tokenHeader
    });
  }

  getCommentListForBook(bookId:number) {
  	let url = AppConst.UserPath +"/comment/getCommentListForBook/"+bookId;
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8"
    });
  	return this.http.get(url, {headers: this.tokenHeader});
  }

  hitLike(commentId:number){
    // let url = AppConst.UserPath +"/comment/statusLike";
    let url = AppConst.UserPath +"/likes/add";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    // let info = {
    //   "commentId":commentId,
    //   "qtyLike":qtyLike
    // }
    return this.http.post(url, commentId, {headers: this.tokenHeader});
  }

  addReplyComment(replyCommentContent: string, commentId: number) {
    let url = AppConst.UserPath + "/comment/replyComment/add";
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
    let info = {
      "replyCommentContent": replyCommentContent,
      "commentId": commentId  
    };
    return this.http.post(url, info, {
      headers: this.tokenHeader
    });
  }

  // getReplyCommentListForComment(commentId:number) {
  // 	let url = AppConst.UserPath +"comment/replyComment/getReplyCommentListForComment/"+commentId;
  //   this.tokenHeader = new Headers({
  //     "Content-Type": "application/json; charset=UTF-8",
  //     Authorization: "Bearer " + this.currentUser.token
  //   });
  // 	return this.http.get(url, {headers: this.tokenHeader});
  // }

  getLikesListBasedOnComment(commentId) {
  	let url = AppConst.UserPath +"/likes/getLikesListBasedOnComment/"+commentId;
    this.tokenHeader = new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + this.currentUser.token
    });
  	return this.http.get(url, {headers: this.tokenHeader});
  }
  
}
