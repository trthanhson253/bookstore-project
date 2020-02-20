
import { OrderBillingAddress } from './order-billing-address';

export class OrderPayment {
	public id: number;
	public cardName: string;
	public cardNumber: string;
	public expiryDate: string;
    public securityCode: number;
    
    public state: string;
    public zipCode: number;
	public defaultPayment: boolean;
	public billingAddress: OrderBillingAddress;
}
