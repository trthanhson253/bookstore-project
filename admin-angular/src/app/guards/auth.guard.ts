import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../admin/models/user";
import { LoginService } from "../admin/services/login.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {
  currentUser: User;
  constructor(private router: Router, private loginService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      if (
        route.data.roles &&
        route.data.roles.indexOf(this.currentUser.role) === -1
      ) {
        this.router.navigate(["/401"]);
        return false;
      }
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
