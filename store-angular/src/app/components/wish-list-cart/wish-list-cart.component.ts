import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WishlistCartService } from 'src/app/services/wishlist-cart.service';
import { WishListCartItem } from 'src/app/models/wishlist-cart-item';

@Component({
  selector: 'app-wish-list-cart',
  templateUrl: './wish-list-cart.component.html',
  styleUrls: ['./wish-list-cart.component.css']
})
export class WishListCartComponent implements OnInit {
  public wishListCartItemList:WishListCartItem[];

  constructor(public http: Http,
    public wishlistCartService:WishlistCartService) { }

  getWishListCartItem() {
    this.wishlistCartService.getWishListCartItem().subscribe(
      res => {
       
        this.wishListCartItemList = res.json();      
      },
      err => {}
    );
  }

  removeWishListCartItem(wishListCartItemId:number){
    this.wishlistCartService.removeWishListCartItem(wishListCartItemId).subscribe(
      res => {
        this.getWishListCartItem();       
      },
      err => {}
    );
  }

  ngOnInit() {

    this.getWishListCartItem();
  }

}
