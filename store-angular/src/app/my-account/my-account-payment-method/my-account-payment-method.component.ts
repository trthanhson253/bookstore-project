import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AppConst } from "src/app/constants/app-constants";
import { UserPayment } from "src/app/models/user-payment";
import { UserPaymentService } from "src/app/services/user-payment.service";

@Component({
  selector: "app-my-account-payment-method",
  templateUrl: "./my-account-payment-method.component.html",
  styleUrls: ["./my-account-payment-method.component.css"]
})
export class MyAccountPaymentMethodComponent implements OnInit {
  public userPayment: UserPayment = new UserPayment();
  public defaultPaymentSet: boolean;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public userPaymentService: UserPaymentService
  ) {}

  openDialogAddMyCard(): void {
    const dialogRef = this.dialog.open(DialogAddMyCardDialog, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onGetUserPaymentList();
    });
  }

  setDefaultPayment(id: number) {
    this.defaultPaymentSet = false;
    this.userPaymentService.setDefaultPayment(id).subscribe(
      res => {
        this.onGetUserPaymentList();
        this.defaultPaymentSet = true;
      },
      error => {
      
      }
    );
  }

  openDialogUpdateMyCard(payment: UserPayment): void {
    const dialogRef = this.dialog.open(DialogUpdateMyCardDialog, {
      width: "450px",
      data: payment
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onGetUserPaymentList();
    });
  }

  openDialogDeleteMyCard(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteMyCardDialog, {
      width: "550px",
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.onGetUserPaymentList();
    });
  }

  onGetUserPaymentList() {
    this.userPaymentService.getUserPaymentList().subscribe(
      res => {
        this.userPayment = res.json();
       
      },
      err => {}
    );
  }

  ngOnInit() {
    this.onGetUserPaymentList();
  }
}

@Component({
  selector: "add-my-card",
  templateUrl: "dialog-add-my-card.html"
})
export class DialogAddMyCardDialog implements OnInit {
  public stateList: string[] = [];
  public userPayment: UserPayment = new UserPayment();
  constructor(
    public dialogRef: MatDialogRef<DialogAddMyCardDialog>,
    public userPaymentService: UserPaymentService
  ) {}

  onAddNewCard() {
    this.userPaymentService.addNewCard(this.userPayment).subscribe(
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
  selector: "update-my-card",
  templateUrl: "dialog-update-my-card.html"
})
export class DialogUpdateMyCardDialog implements OnInit {
  public stateList: string[] = [];
  public userPayment: UserPayment = new UserPayment();
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateMyCardDialog>,
    public userPaymentService: UserPaymentService,
    @Inject(MAT_DIALOG_DATA) public data: UserPayment
  ) {
    this.userPayment = this.data;
  }

  onAddNewCard() {
    this.userPaymentService.addNewCard(this.userPayment).subscribe(
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
  selector: "delete-my-card",
  templateUrl: "dialog-delete-my-card.html"
})
export class DialogDeleteMyCardDialog implements OnInit {
  public id: number;
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateMyCardDialog>,
    public userPaymentService: UserPaymentService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    this.id = this.data;
  }

  onDeleteMyCard() {
    this.userPaymentService.deleteMyCard(this.id).subscribe(
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
