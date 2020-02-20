import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { FormsModule } from "@angular/forms";

//Component
import { HeaderComponent } from "./components/templates/header/header.component";
import { MenuComponent } from "./components/templates/menu/menu.component";
import { AdminindexComponent } from "./components/adminindex/adminindex.component";

import {
  CatesComponent,
  DialogAddMyCatesDialog,
  DialogUpdateMyCatesDialog,
  DialogDeleteMyCatesDialog
} from "./components/cates/cates.component";
import {
  BooksComponent,
  DialogAddMyBookDialog,
  DialogDeleteMyBookDialog,
  DialogUpdateMyBookDialog
} from "./components/books/books.component";

//Services
import { CatesService } from "./services/cates.service";
import { BooksService } from "./services/books.service";
import { UsersService } from "./services/users.service";

//Material
import { MatButtonModule } from "@angular/material/button";
// import { TableModule } from "primeng/table";
import { MatDialogModule } from "@angular/material/dialog";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatListModule } from "@angular/material/list";

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material";

import {
  UsersComponent,
  DialogAddMyUserDialog
} from "./components/users/users.component";

import { UploadBookImageService } from "./services/upload-book-image.service";
import {
  OrderComponent,
  DialogSeeMyOrderDialog
} from "./components/order/order.component";
import { OrderService } from "./services/order.service";

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    MenuComponent,
    AdminindexComponent,
    UsersComponent,
    BooksComponent,
    CatesComponent,
    DialogAddMyCatesDialog,
    DialogUpdateMyCatesDialog,
    DialogDeleteMyCatesDialog,
    DialogAddMyBookDialog,
    DialogDeleteMyBookDialog,
    DialogUpdateMyBookDialog,
    DialogAddMyUserDialog,
    OrderComponent,
    DialogSeeMyOrderDialog
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule,
    // TableModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    CatesService,
    BooksService,
    UsersService,
    UploadBookImageService,
    OrderService
  ],
  bootstrap: [
    AdminComponent,
    DialogAddMyCatesDialog,
    DialogUpdateMyCatesDialog,
    DialogDeleteMyCatesDialog,
    DialogAddMyBookDialog,
    DialogDeleteMyBookDialog,
    DialogUpdateMyBookDialog,
    DialogAddMyUserDialog,
    DialogSeeMyOrderDialog
  ]
})
export class AdminModule {}
