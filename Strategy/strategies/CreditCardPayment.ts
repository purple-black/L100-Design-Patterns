import { PaymentStrategy } from "./PaymentStrategy";

// Concrete Strategy for Credit Card
export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Credit Card.`);
  }
}
