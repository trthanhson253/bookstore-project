import { Component, OnInit } from "@angular/core";
import { Cates } from "src/app/models/cates";
import { CatesService } from "src/app/services/cates.service";
import { LoginService } from "src/app/services/login.service";
import { Router, NavigationExtras } from "@angular/router";
import { BookService } from "src/app/services/book.service";
import { Books } from "src/app/models/books";
import { Http } from "@angular/http";
import { User } from "src/app/models/user";
import { CartService } from "src/app/services/cart.service";
import { CartItem } from "src/app/models/cart-item";
import { WishlistCartService } from "src/app/services/wishlist-cart.service";
import { WishListCartItem } from "src/app/models/wishlist-cart-item";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  public cates: Cates[] = [];
  public bookList: Books[] = [];
  public keyword: string;
  public searchOption: string = "Search All";
  public currentUser: User;
  public isLoggedIn: boolean = false;
  public name: string;
  public cartItemList: CartItem[] = [];
  public cartItemNumber: number;
  public wishListCartItemList: WishListCartItem[];
  dataFetched = false;
  sachs: Books = new Books();
  searchOption1: string = "Search All";

  constructor(
    public catesService: CatesService,
    public cartService: CartService,
    public loginService: LoginService,
    public bookService: BookService,
    public router: Router,
    public http: Http,
    public wishlistCartService: WishlistCartService,
    public dialog: MatDialog
  ) {}

  getCatesList() {
    this.catesService.getCatesList().subscribe(
      res => {
        this.cates = res.json();
        this.dataFetched = true;
      },
      err => {}
    );
  }

  openNoticeHowToUse(): void {
    const dialogRef = this.dialog.open(DialogHowToUseDialog, {
      // width: "450px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  onLogout() {
    this.loginService.logout().subscribe(
      res => {
        this.isLoggedIn = false;
        this.router.navigate(["/"]);
      },
      error => {}
    );
  }

  onSearch() {
    this.bookService.searchBook(this.keyword, this.searchOption).subscribe(
      res => {
        this.bookList = res.json();

        let navigationExtras: NavigationExtras = {
          queryParams: {
            keyword: JSON.stringify(this.bookList)
          }
        };
        this.router.navigate(["/bookList"], navigationExtras);
      },
      err => {}
    );
  }

  ketqua(e) {
    this.bookService.searchBook(e, this.searchOption1).subscribe(
      res => {
        this.sachs = res.json();
      },
      err => {}
    );
  }

  getCartItemList() {
    this.cartService.getCartItemList().subscribe(
      res => {
        this.cartItemList = res.json();
        this.cartItemNumber = this.cartItemList.length;
      },
      error => {}
    );
  }

  getWishListCartItem() {
    this.wishlistCartService.getWishListCartItem().subscribe(
      res => {
        this.wishListCartItemList = res.json();
      },
      err => {}
    );
  }

  removeWishListCartItem(wishListCartItemId: number) {
    this.wishlistCartService
      .removeWishListCartItem(wishListCartItemId)
      .subscribe(
        res => {
          this.getWishListCartItem();
        },
        err => {}
      );
  }

  ngOnInit() {
    this.getCatesList();
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (this.currentUser) {
      this.isLoggedIn = true;
      this.name = this.currentUser.name;
      this.getCartItemList();
      this.getWishListCartItem();
    } else {
      this.isLoggedIn = false;
    }
  }
}

@Component({
  selector: "how-to-use",
  templateUrl: "dialog-how-to-use.html"
})
export class DialogHowToUseDialog implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogHowToUseDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
