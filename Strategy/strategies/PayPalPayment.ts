import { IPaymentStrategy } from "./PaymentStrategy";

// Concrete Strategy for PayPal
export class PayPalPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using PayPal.`);
  }
}
