import { Component, OnInit } from "@angular/core";
import { Books } from "src/app/models/books";
import { AppConst } from "src/app/constants/app-constants";
import { Order } from "src/app/models/order";
import { OrderPayment } from "src/app/models/order-payment";
import { UserPayment } from "src/app/models/user-payment";
import { UserShipping } from "src/app/models/user-shipping";
import { OrderShippingAddress } from "src/app/models/order-shipping-address";
import { OrderBillingAddress } from "src/app/models/order-billing-address";
import { ShoppingCart } from "src/app/models/shopping-cart";
import { CartItem } from "src/app/models/cart-item";
import { Router, NavigationExtras } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { UserShippingService } from "src/app/services/user-shipping.service";
import { UserPaymentService } from "src/app/services/user-payment.service";
import { CheckoutService } from "src/app/services/checkout.service";
import { User } from "src/app/models/user";
import { Http } from "@angular/http";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"]
})
export class CheckOutComponent implements OnInit {
  public serverPath = AppConst.UserPath;
  public selectedBook: Books;
  public cartItemList: CartItem[] = [];
  public cartItemNumber: number;
  public shoppingCart: ShoppingCart = new ShoppingCart();
  public cartItemUpdated: boolean;
  public orderShippingAddress: OrderShippingAddress = new OrderShippingAddress();
  public orderBillingAddress: OrderBillingAddress = new OrderBillingAddress();
  public userPayment: UserPayment = new UserPayment();
  public userShipping: UserShipping = new UserShipping();
  // public userBilling: UserBilling = new UserBilling();
  public userShippingList: UserShipping[] = [];
  public userPaymentList: UserPayment[] = [];
  public orderPayment: OrderPayment = new OrderPayment();
  public selectedTab: number;
  public emptyShippingList: boolean = true;
  public emptyPaymentList: boolean = true;
  public stateList: string[] = [];
  public shippingMethod: string;
  public order: Order = new Order();

  public isLoggedIn: boolean;
  public currentUser: User;

  constructor(
    public router: Router,
    public http: Http,
    public cartService: CartService,
    public shippingService: UserShippingService,
    public paymentService: UserPaymentService,
    public checkoutService: CheckoutService
  ) {}

  onSelect(book: Books) {
    this.selectedBook = book;
    this.router.navigate(["/bookDetail", this.selectedBook.id]);
  }

  selectedChange(val: number) {
    this.selectedTab = val;
  }

  goToPayment() {
    this.selectedTab = 1;
  }

  goToReview() {
    this.selectedTab = 2;
  }

  getCartItemList() {
    this.cartService.getCartItemList().subscribe(
      res => {
        this.cartItemList = res.json();
        this.cartItemNumber = this.cartItemList.length;
      },
      error => {
       
      }
    );
  }

  setShippingAddress(userShipping: UserShipping) {
    this.orderShippingAddress.shippingAddressName =
      userShipping.userShippingName;
    this.orderShippingAddress.shippingAddressStreet =
      userShipping.userShippingStreet;

    this.orderShippingAddress.shippingAddressCity =
      userShipping.userShippingCity;
    this.orderShippingAddress.shippingAddressState =
      userShipping.userShippingState;
    this.orderShippingAddress.shippingAddressCountry =
      userShipping.userShippingCountry;
    this.orderShippingAddress.shippingAddressZipcode =
      userShipping.userShippingZipcode;
  }

  setPaymentMethod(userPayment: UserPayment) {
    this.orderPayment.cardName = userPayment.cardName;
    this.orderPayment.cardNumber = userPayment.cardNumber;
    this.orderPayment.expiryDate = userPayment.expiryDate;
    this.orderPayment.securityCode = userPayment.securityCode;
    this.orderPayment.state = userPayment.state;
    this.orderPayment.zipCode = userPayment.zipCode;
    this.orderPayment.defaultPayment = userPayment.defaultPayment;

   
  }

  setBillingAsShipping(checked: boolean) {
   
    if (checked) {
      this.orderBillingAddress.billingAddressName = this.orderShippingAddress.shippingAddressName;
      this.orderBillingAddress.billingAddressStreet = this.orderShippingAddress.shippingAddressStreet;
      this.orderBillingAddress.billingAddressCity = this.orderShippingAddress.shippingAddressCity;
      this.orderBillingAddress.billingAddressState = this.orderShippingAddress.shippingAddressState;
      this.orderBillingAddress.billingAddressCountry = this.orderShippingAddress.shippingAddressCountry;
      this.orderBillingAddress.billingAddressZipcode = this.orderShippingAddress.shippingAddressZipcode;
    } else {
      this.orderBillingAddress.billingAddressName = "";
      this.orderBillingAddress.billingAddressStreet = "";
      this.orderBillingAddress.billingAddressCity = "";
      this.orderBillingAddress.billingAddressState = "";
      this.orderBillingAddress.billingAddressCountry = "";
      this.orderBillingAddress.billingAddressZipcode = "";
    }
  }

  onSubmit() {
    

    this.checkoutService
      .checkout(
        this.orderShippingAddress,
        this.orderBillingAddress,
        this.orderPayment,
        this.shippingMethod
      )
      .subscribe(
        res => {
          this.order = res.json();
         

          let navigationExtras: NavigationExtras = {
            queryParams: {
              order: JSON.stringify(this.order)
            }
          };

          this.router.navigate(["/orderSummary"], navigationExtras);
        },
        error => {
         
        }
      );
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (this.currentUser) {
      this.getCartItemList();

      this.cartService.getShoppingCart().subscribe(
        res => {
          
          this.shoppingCart = res.json();
        },
        error => {
         
        }
      );

      this.shippingService.getUserShippingList().subscribe(
        res => {
          
          this.userShippingList = res.json();
          if (this.userShippingList.length) {
            this.emptyShippingList = false;

            // for (let userShipping of this.userShippingList) {
            //   if (userShipping.userShippingDefault) {
            //     this.setShippingAddress(userShipping);
            //     return;
            //   }
            // }
          }
        },
        error => {
         
        }
      );

      this.paymentService.getUserPaymentList().subscribe(
        res => {
          
          this.userPaymentList = res.json();
          this.emptyPaymentList = false;

          if (this.userPaymentList.length) {
            this.emptyPaymentList = false;

            // for (let userPayment of this.userPaymentList) {
            //   if (userPayment.defaultPayment) {
            //     this.setPaymentMethod(userPayment);
            //     return;
            //   }
            // }
          }
        },
        error => {
          
        }
      );

      for (let s in AppConst.usStates) {
        this.stateList.push(s);
      }

      // this.orderPayment.expiryDate = "";
      // this.orderBillingAddress.billingAddressState = "";

      this.orderShippingAddress.shippingAddressName = "";
      this.orderShippingAddress.shippingAddressStreet = "";
      this.orderShippingAddress.shippingAddressCity = "";
      this.orderShippingAddress.shippingAddressState = "";
      this.orderShippingAddress.shippingAddressCountry = "";
      this.orderShippingAddress.shippingAddressZipcode = "";

      this.shippingMethod = "groundShipping";

      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
