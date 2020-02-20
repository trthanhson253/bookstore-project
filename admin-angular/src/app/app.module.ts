import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdminModule } from "./admin/admin.module";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login/login.component";

import { LoginService } from "./admin/services/login.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
