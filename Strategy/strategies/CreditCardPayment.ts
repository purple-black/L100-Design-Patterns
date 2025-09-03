import { IPaymentStrategy } from "./PaymentStrategy";

// Concrete Strategy for Credit Card
export class CreditCardPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Credit Card.`);
  }
}
