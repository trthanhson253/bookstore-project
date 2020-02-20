import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Http } from "@angular/http";

@Component({
  selector: "app-my-account-home",
  templateUrl: "./my-account-home.component.html",
  styleUrls: ["./my-account-home.component.css"]
})
export class MyAccountHomeComponent implements OnInit {
  public user: User = new User();
  public newName: string;
  public newPassword: string;
  public currentPassword: string;
  public retypePassword: string;
  updateSuccess: boolean = false;
  passwordAndReTypePasswordNotMatch: boolean = false;
  incorrectCurrentPassword: boolean = false;

  public currentUser: User;

  constructor(
    public userService: UserService,
    public http: Http,
    public dialog: MatDialog,
    public router: Router
  ) {}

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
       
      },
      err => {}
    );
  }

  openDialogUpdateName(): void {
    const dialogRef = this.dialog.open(DialogMyNameDialog, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCurrentUser();
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/my-account/home"]);
      });
    });
  }
  openDialogUpdateEmail(): void {
    const dialogRef = this.dialog.open(DialogMyEmailDialog, {
      width: "550px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCurrentUser();
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/my-account/home"]);
      });
    });
  }

  onChangePassword() {
    this.userService
      .changePassword(
        this.newPassword,
        this.currentPassword,
        this.retypePassword
      )
      .subscribe(
        res => {
          this.updateSuccess = true;
          this.newPassword = "";
          this.currentPassword = "";
          this.retypePassword = "";
        },
        err => {
          let errorMessage = err.text();
          
          if (errorMessage == "PasswordAndReTypePasswordNotMatch") {
            this.passwordAndReTypePasswordNotMatch = true;
          }
          if (errorMessage == "IncorrectCurrentPassword") {
            this.incorrectCurrentPassword = true;
          }
          this.retypePassword = "";
          this.newPassword = "";
          this.currentPassword = "";
        }
      );
  }
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (this.currentUser) {
      this.getCurrentUser();
    }
  }
}

@Component({
  selector: "dialog-my-name",
  templateUrl: "dialog-my-name.html"
})
export class DialogMyNameDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogMyNameDialog>,
    public userService: UserService
  ) {}
  public user: User = new User();
  public newName: string;

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
      },
      err => {}
    );
  }

  updateName(): void {
    this.userService.updateName(this.user.name).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
       
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getCurrentUser();
  }
}

@Component({
  selector: "dialog-my-email",
  templateUrl: "dialog-my-email.html"
})
export class DialogMyEmailDialog implements OnInit {
  public user: User = new User();
  public emailExist: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogMyEmailDialog>,
    public userService: UserService
  ) {}

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
      },
      err => {}
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  updateEmail(): void {
    this.userService.updateEmail(this.user.email).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
       
        let errorMessage = err.text();
        if ((errorMessage = "Email already existed")) this.emailExist = true;
      }
    );
  }

  ngOnInit() {
    this.getCurrentUser();
  }
}
