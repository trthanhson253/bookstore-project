import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { UploadImageUserService } from "src/app/services/upload-image-user.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  user: User = new User();
  userRegister: User = new User();
  newUser: User = new User();
  getPasswordEmail: string;
  isRegisteredSuccess: boolean = false;
  usernameExists: boolean = false;
  emailExists: boolean = false;
  passwordLength: boolean = false;
  passwordNotMatch: boolean = false;
  emailNotMatch: boolean = false;
  loginError: boolean = false;
  isForgotPassword: boolean = false;
  emailNotFound: boolean = false;
  emailFound: boolean = false;

  constructor(
    public loginService: LoginService,
    public userService: UserService,
    public router: Router,
    public uploadImageUserService: UploadImageUserService
  ) {}

  onLogin() {
    this.loginService.login(this.user).subscribe(
      res => {
        localStorage.setItem("currentUser", JSON.stringify(res.json()));
       
        // this.router.navigateByUrl(`/`).then(() => {
        //   this.router.navigateByUrl("/my-account/home");
        // });
        window.location.href = "/my-account/home";
      },
      err => {
        this.loginError = true;

        this.user.password = "";
      }
    );
  }

  onRegister() {
    this.userService.register(this.userRegister).subscribe(
      res => {
        
        this.uploadImageUserService.upload(
          JSON.parse(JSON.parse(JSON.stringify(res))._body).id
        );
        this.newUser = res.json();
        this.isRegisteredSuccess = true;
      },
      err => {
    
        let errorMessage = err.text();
        if (errorMessage == "usernameExists") this.usernameExists = true;
        if (errorMessage == "emailExists") this.emailExists = true;
        if (errorMessage == "passwordLength") this.passwordLength = true;
        if (errorMessage == "passwordNotMatch") this.passwordNotMatch = true;
        if (errorMessage == "emailNotMatch") this.emailNotMatch = true;
      }
    );
  }

  forgotPassword() {
    this.isForgotPassword = !this.isForgotPassword;
  }

  onForgotPassword() {
    this.loginService.retrievePassword(this.getPasswordEmail).subscribe(
      res => {
        this.emailNotFound = true;
        // this.emailFound = true;
      },
      err => {
       
        let errorMessage = err.text();
        if ((errorMessage = "Email Not Found")) this.emailFound = true;
      }
    );
  }

  ngOnInit() {}
}
