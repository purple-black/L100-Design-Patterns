import { IPaymentStrategy } from "../strategies/PaymentStrategy";

// Context Class that uses a Payment Strategy
export class PaymentContext {
  private strategy: IPaymentStrategy;

  constructor(strategy: IPaymentStrategy) {
    this.strategy = strategy;
  }

  // Change the strategy dynamically
  setStrategy(strategy: IPaymentStrategy) {
    this.strategy = strategy;
  }

  // Execute payment with chosen strategy
  executePayment(amount: number) {
    this.strategy.pay(amount);
  }
}
