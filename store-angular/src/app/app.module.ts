import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import {
  NavBarComponent,
  DialogHowToUseDialog
} from "./components/nav-bar/nav-bar.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { BookListCategoryComponent } from "./components/book-list-category/book-list-category.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { BookService } from "./services/book.service";
import { LoginService } from "./services/login.service";
import { UserService } from "./services/user.service";
import { CatesService } from "./services/cates.service";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MyAccountModule } from "./my-account/my-account.module";
import { FooterComponent } from "./components/footer/footer.component";
import { UploadImageUserService } from "./services/upload-image-user.service";

import {
  MatButtonModule,
  MatSnackBarModule,
  MatTabsModule,
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
  MatDialogModule
} from "@angular/material/";

import { UserPaymentService } from "./services/user-payment.service";
import { UserShippingService } from "./services/user-shipping.service";
import { BookListComponent } from "./components/book-list-search/book-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { CartService } from "./services/cart.service";

import { OrderService } from "./services/order.service";
import { CheckoutService } from "./services/checkout.service";

import { OrderShippingService } from "./services/order-shipping.service";
import { OrderPaymentService } from "./services/order-payment.service";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { CommentService } from "./services/comment.service";
import { BookAllComponent } from "./components/book-all/book-all.component";
import { WishlistCartService } from "./services/wishlist-cart.service";
import { WishListCartComponent } from "./components/wish-list-cart/wish-list-cart.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogInComponent,
    BookListCategoryComponent,
    BookDetailComponent,
    HomeComponent,
    FooterComponent,
    BookListComponent,
    ShoppingCartComponent,

    UnauthorizedComponent,
    NotFoundComponent,
    CheckOutComponent,
    OrderSummaryComponent,
    BookAllComponent,
    WishListCartComponent,
    DialogHowToUseDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,

    MatProgressSpinnerModule,
    MyAccountModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    MatTooltipModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [
    BookService,
    LoginService,
    UserService,
    CatesService,
    UploadImageUserService,
    UserPaymentService,
    UserShippingService,
    CartService,
    OrderService,
    CheckoutService,
    OrderShippingService,
    OrderPaymentService,
    CommentService,
    WishlistCartService
  ],
  bootstrap: [AppComponent, DialogHowToUseDialog]
})
export class AppModule {}
