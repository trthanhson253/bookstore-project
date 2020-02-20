import {CartItem} from './cart-item';
import { OrderBillingAddress } from './order-billing-address';
import { OrderPayment } from './order-payment';
import { OrderShippingAddress } from './order-shipping-address';

export class Order {

	public id: number;
	public orderDate: string;
	public shippingDate: string;
	public shippingMethod: string;
	public orderStatus: string;
	public orderTotal: number;
	public cartItemList: CartItem[];
	orderBillingAddress:OrderBillingAddress;
	orderPayment:OrderPayment;
	orderShippingAddress:OrderShippingAddress;
}
