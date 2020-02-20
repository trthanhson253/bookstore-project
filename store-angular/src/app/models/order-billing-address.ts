import {Order} from './order';

export class OrderBillingAddress {
	public id: number;
	public billingAddressName: string;
	public billingAddressStreet: string;
	
	public billingAddressCity: string;
	public billingAddressState: string;
	public billingAddressCountry: string;
	public billingAddressZipcode: string;
	public order: Order;
}
