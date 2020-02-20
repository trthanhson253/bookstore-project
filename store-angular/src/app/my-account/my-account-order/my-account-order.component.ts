import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "src/app/services/order.service";
import { Order } from "src/app/models/order";

@Component({
  selector: "app-my-account-order",
  templateUrl: "./my-account-order.component.html",
  styleUrls: ["./my-account-order.component.css"]
})
export class MyAccountOrderComponent implements OnInit {
  public orderList: Order[] = [];
  public order: Order = new Order();
  public displayOrderDetail: boolean;

  constructor(public orderService: OrderService, public router: Router) {}

  onDisplayOrder(order: Order) {
    
    this.order = order;
    this.displayOrderDetail = true;
  }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(
      res => {
        this.orderList = res.json();
      
      },
      error => {
        
      }
    );
  }
}
