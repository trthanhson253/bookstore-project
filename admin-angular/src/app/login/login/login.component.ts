import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/admin/services/login.service";
import { Router } from "@angular/router";
import { User } from "src/app/admin/models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  

  onLogin() {
    this.loginService.login(this.user).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(res.json()));
        this.router.navigate(["/admin/index"]);
      },
      err => {
        this.errorMessage = "Username or password is incorrect";
      }
    );
  }
}
