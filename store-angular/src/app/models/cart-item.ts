
import {ShoppingCart} from './shopping-cart';
import { Books } from './books';

export class CartItem {
	public id: number;
	public qty: number;
	public subtotal: number;
	public book: Books;
	public shoppingCart: ShoppingCart
	public toUpdate:boolean;
}
