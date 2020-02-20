import { Component, OnInit } from "@angular/core";
import { UploadImageUserService } from "src/app/services/upload-image-user.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: "app-my-account-photo",
  templateUrl: "./my-account-photo.component.html",
  styleUrls: ["./my-account-photo.component.css"]
})
export class MyAccountPhotoComponent implements OnInit {
  public currentUser: User;
  constructor(
    public uploadImageUserService: UploadImageUserService,
    public userService: UserService,
    public router: Router,
    public _snackBar: MatSnackBar
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  onSubmit() {
    this.uploadImageUserService.modify(this.currentUser.id);
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["/my-account/photo"]);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {}
}
