import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login/login.component";
import { AdminindexComponent } from "./admin/components/adminindex/adminindex.component";

import { BooksComponent } from "./admin/components/books/books.component";
import { CatesComponent } from "./admin/components/cates/cates.component";
import { AuthGuard } from "./guards/auth.guard";
import { Role } from "./admin/models/role";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";
import { UsersComponent } from "./admin/components/users/users.component";
import { OrderComponent } from "./admin/components/order/order.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  { path: "404", component: NotFoundComponent },
  { path: "401", component: UnauthorizedComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
    children: [
      {
        path: "",
        redirectTo: "index",
        pathMatch: "full"
      },
      {
        path: "index",
        component: AdminindexComponent
      },
      {
        path: "cates",
        component: CatesComponent
      },
      {
        path: "books",
        component: BooksComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "orders",
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(["/404"]);
    };
  }
}
