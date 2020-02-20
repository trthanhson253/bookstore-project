import { Component, OnInit, Inject } from "@angular/core";
import { UserShipping } from "src/app/models/user-shipping";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AppConst } from "src/app/constants/app-constants";
import { UserShippingService } from "src/app/services/user-shipping.service";

@Component({
  selector: "app-my-account-shipping",
  templateUrl: "./my-account-shipping.component.html",
  styleUrls: ["./my-account-shipping.component.css"]
})
export class MyAccountShippingComponent implements OnInit {
  public userShipping: UserShipping = new UserShipping();
  public defaultShippingSet: boolean = false;
  public defaultUserShippingId: number;
  constructor(
    public dialog: MatDialog,
    public router: Router,
    public userShippingService: UserShippingService
  ) {}

  setDefaultShipping(id: number) {
    this.defaultShippingSet = false;
    this.userShippingService.setDefaultShipping(id).subscribe(
      res => {
        this.onGetUserShippingList();
        this.defaultShippingSet = true;
      },
      error => {
       
      }
    );
  }

  openDialogAddMyAddress(): void {
    const dialogRef = this.dialog.open(DialogAddMyAddressDialog, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onGetUserShippingList();
    });
  }

  openDialogUpdateMyAddress(shipping: UserShipping): void {
    const dialogRef = this.dialog.open(DialogUpdateMyAddressDialog, {
      width: "450px",
      data: shipping
    });
    dialogRef.afterClosed().subscribe(result => {
      this.onGetUserShippingList();
    });
  }

  openDialogDeleteMyAddress(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteMyAddressDialog, {
      width: "550px",
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.onGetUserShippingList();
    });
  }

  onGetUserShippingList() {
    this.userShippingService.getUserShippingList().subscribe(
      res => {
        this.userShipping = res.json();
       

        for (let index in this.userShipping) {
          if (this.userShipping[index].userShippingDefault) {
            this.defaultUserShippingId = this.userShipping[index].id;
            break;
          }
        }
      },
      err => {}
    );
  }

  ngOnInit() {
    this.onGetUserShippingList();

    this.defaultShippingSet = false;
  }
}

@Component({
  selector: "add-my-address",
  templateUrl: "dialog-add-my-address.html"
})
export class DialogAddMyAddressDialog implements OnInit {
  public stateList: string[] = [];
  public userShipping: UserShipping = new UserShipping();
  constructor(
    public dialogRef: MatDialogRef<DialogAddMyAddressDialog>,
    public userShippingService: UserShippingService
  ) {}

  onAddNewAddress() {
    this.userShippingService.addNewAddress(this.userShipping).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {}
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    for (let s in AppConst.usStates) {
      this.stateList.push(s);
    }
  }
}

@Component({
  selector: "update-my-address",
  templateUrl: "dialog-update-my-address.html"
})
export class DialogUpdateMyAddressDialog implements OnInit {
  public stateList: string[] = [];
  public userShipping: UserShipping = new UserShipping();
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateMyAddressDialog>,
    public userShippingService: UserShippingService,
    @Inject(MAT_DIALOG_DATA) public data: UserShipping
  ) {
    this.userShipping = this.data;
  }

  onAddNewAddress() {
    this.userShippingService.addNewAddress(this.userShipping).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {}
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}

@Component({
  selector: "delete-my-address",
  templateUrl: "dialog-delete-my-address.html"
})
export class DialogDeleteMyAddressDialog implements OnInit {
  public id: number;

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteMyAddressDialog>,
    public userShippingService: UserShippingService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    this.id = this.data;
  }

  onDeleteMyAddress() {
    this.userShippingService.deleteMyAddress(this.id).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {}
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
