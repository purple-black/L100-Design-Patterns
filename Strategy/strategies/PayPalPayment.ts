import { PaymentStrategy } from "./PaymentStrategy";

// Concrete Strategy for PayPal
export class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using PayPal.`);
  }
}
