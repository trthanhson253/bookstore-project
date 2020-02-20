import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/admin/services/login.service";
import { Router } from "@angular/router";
import { User } from "src/app/admin/models/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public currentUser: User;
  constructor(public loginService: LoginService, public router: Router) {}

  logOut() {
    this.loginService.logout().subscribe(res => {
      this.router.navigate(["/login"]);
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
}
