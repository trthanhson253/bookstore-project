

import { Books } from './books';

export class CartItem {
	public id: number;
	public qty: number;
	public subtotal: number;
	public book: Books;
	public toUpdate:boolean;
}
