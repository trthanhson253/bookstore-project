import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAccountComponent } from "./my-account.component";
import { FormsModule } from "@angular/forms";

import {
  MyAccountHomeComponent,
  DialogMyNameDialog,
  DialogMyEmailDialog
} from "./my-account-home/my-account-home.component";

import { MenuComponent } from "./menu/menu.component";
import { myAccountRouting } from "./my-account.routing";
import { MyAccountPhotoComponent } from "./my-account-photo/my-account-photo.component";
import {
  MyAccountPaymentMethodComponent,
  DialogAddMyCardDialog,
  DialogUpdateMyCardDialog,
  DialogDeleteMyCardDialog
} from "./my-account-payment-method/my-account-payment-method.component";
import { MyAccountOrderComponent } from "./my-account-order/my-account-order.component";
import {
  MyAccountShippingComponent,
  DialogAddMyAddressDialog,
  DialogUpdateMyAddressDialog,
  DialogDeleteMyAddressDialog
} from "./my-account-shipping/my-account-shipping.component";

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    MyAccountComponent,
    MyAccountHomeComponent,
    MenuComponent,
    MyAccountPhotoComponent,
    MyAccountPaymentMethodComponent,
    MyAccountOrderComponent,
    MyAccountShippingComponent,
    DialogMyNameDialog,
    DialogMyEmailDialog,
    DialogAddMyCardDialog,
    DialogUpdateMyCardDialog,
    DialogAddMyAddressDialog,
    DialogUpdateMyAddressDialog,
    DialogDeleteMyCardDialog,
    DialogDeleteMyAddressDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    myAccountRouting,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [
    MyAccountComponent,
    DialogMyNameDialog,
    DialogMyEmailDialog,
    DialogAddMyCardDialog,
    DialogUpdateMyCardDialog,
    DialogAddMyAddressDialog,
    DialogUpdateMyAddressDialog,
    DialogDeleteMyCardDialog,
    DialogDeleteMyAddressDialog
  ]
})
export class MyAccountModule {}
