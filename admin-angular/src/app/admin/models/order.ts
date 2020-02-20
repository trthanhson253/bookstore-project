import { OrderBillingAddress } from './order-billing-address';
import { OrderShippingAddress } from './order-shipping-address';
import { OrderPayment } from './order-payment';
import { CartItem } from './cart-item';

export class Order {
  public id: number;
  public orderDate: string;
  public shippingDate: string;
  public shippingMethod: string;
  public orderStatus: string;
  public orderTotal: number;
  public orderBillingAddress:OrderBillingAddress;
  orderShippingAddress:OrderShippingAddress;
  orderPayment:OrderPayment;
  cartItemList:CartItem;
}
