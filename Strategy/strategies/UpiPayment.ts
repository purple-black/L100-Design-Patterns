import { IPaymentStrategy } from "./PaymentStrategy";

// Concrete Strategy for UPI
export class UpiPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI.`);
  }
}
