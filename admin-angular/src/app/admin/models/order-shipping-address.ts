import {Order} from './order';

export class OrderShippingAddress {
	public id: number;
	public shippingAddressName: string;
	public shippingAddressStreet: string;
	public shippingAddressCity: string;
	public shippingAddressState: string;
	public shippingAddressCountry: string;
	public shippingAddressZipcode: string;
	public shippingAddressDefault: boolean;
	public order: Order;
}
