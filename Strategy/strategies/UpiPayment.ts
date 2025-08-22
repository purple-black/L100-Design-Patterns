import { PaymentStrategy } from "./PaymentStrategy";

// Concrete Strategy for UPI
export class UpiPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI.`);
  }
}
