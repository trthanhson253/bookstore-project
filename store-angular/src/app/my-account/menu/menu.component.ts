import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { Http } from "@angular/http";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  public user: User = new User();
  currentUser: User;
  constructor(public userService: UserService, public http: Http) {}

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
      },
      err => {}
    );
  }
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (this.currentUser) {
      this.getCurrentUser();
    }
  }
}
