import { Component, OnInit } from "@angular/core";
import { User } from "./models/user";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  currentUser: User;
  constructor() {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
}
