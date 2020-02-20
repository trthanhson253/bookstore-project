import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  currentUser: User;
  constructor(private _auth: AuthService, private _router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this._auth.checkLogin();

    if (this._auth.getIsLogin()) {
      if (
        route.data.roles &&
        route.data.roles.indexOf(this.currentUser.role) === -1
      ) {
        this._router.navigate(["/401"]);
        return false;
      }
      return true;
    }
    this._router.navigate(["/login"]);
    return false;
  }
}
