import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConst } from 'src/app/constants/app-constants';
import { Order } from 'src/app/models/order';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  public userPath = AppConst.UserPath;
  public order:Order = new Order();
  public estimatedDeliveryDate: string;
  public cartItemList: CartItem[] = [];

  constructor(public checkoutService: CheckoutService,
  	public route: ActivatedRoute,
  	public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     
  		this.order = JSON.parse(params['order']);

  		let deliveryDate = new Date();

  		if(this.order.shippingMethod=="groundShipping") {
  			deliveryDate.setDate(deliveryDate.getDate()+5);
  		} else {
  			deliveryDate.setDate(deliveryDate.getDate()+3);
  		}

  		let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  		this.estimatedDeliveryDate = days[deliveryDate.getDay()]+', '+deliveryDate.getFullYear()+'/'+deliveryDate.getMonth()+'/'+deliveryDate.getDate();


  		this.cartItemList = this.order.cartItemList;
  	});
  }

}
