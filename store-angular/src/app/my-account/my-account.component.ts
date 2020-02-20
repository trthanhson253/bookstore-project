import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "../models/user";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.css"]
})
export class MyAccountComponent implements OnInit {
  public currentUser: User;

  constructor(public http: Http) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
}
