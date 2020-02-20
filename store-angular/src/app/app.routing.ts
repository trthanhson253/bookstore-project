import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BookListCategoryComponent } from "./components/book-list-category/book-list-category.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { MyAccountHomeComponent } from "./my-account/my-account-home/my-account-home.component";
import { MyAccountPhotoComponent } from "./my-account/my-account-photo/my-account-photo.component";
import { MyAccountPaymentMethodComponent } from "./my-account/my-account-payment-method/my-account-payment-method.component";
import { MyAccountShippingComponent } from "./my-account/my-account-shipping/my-account-shipping.component";
import { MyAccountOrderComponent } from "./my-account/my-account-order/my-account-order.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BookListComponent } from "./components/book-list-search/book-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { LoginGuard } from "./guards/login.guard";
import { UserGuard } from "./guards/user.guard";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { Role } from "./models/role";
import { BookAllComponent } from './components/book-all/book-all.component';
import { WishListCartComponent } from './components/wish-list-cart/wish-list-cart.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "wishlist-cart",
    component: WishListCartComponent,
    canActivate: [UserGuard],
    data: { roles: [Role.USER] }
  },
  {
    path: "books/all",
    component: BookAllComponent
  },
  {
    path: "cates/list/:id",
    component: BookListCategoryComponent
  },
  {
    path: "books/list/:id",
    component: BookDetailComponent,
    canActivate: [UserGuard],
    data: { roles: [Role.USER] }
  },
  {
    path: "login",
    component: LogInComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "bookList",
    component: BookListComponent
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent,
    canActivate: [UserGuard],
    data: { roles: [Role.USER] }
  },
 
  {
    path: "check-out",
    component: CheckOutComponent,
    canActivate: [UserGuard],
    data: { roles: [Role.USER] }
  },
  {
    path: "orderSummary",
    component: OrderSummaryComponent
  },
  { path: "404", component: NotFoundComponent },
  { path: "401", component: UnauthorizedComponent },
  {
    path: "my-account",
    component: MyAccountComponent,
    canActivate: [UserGuard],
    data: { roles: [Role.USER] },
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: MyAccountHomeComponent
      },
      {
        path: "photo",
        component: MyAccountPhotoComponent
      },
      {
        path: "payment",
        component: MyAccountPaymentMethodComponent
      },
      {
        path: "shipping",
        component: MyAccountShippingComponent
      },
      {
        path: "order",
        component: MyAccountOrderComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(["/404"]);
    };
  }
}
