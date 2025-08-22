import { PaymentStrategy } from "../strategies/PaymentStrategy";

// Context Class that uses a Payment Strategy
export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  // Change the strategy dynamically
  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  // Execute payment with chosen strategy
  executePayment(amount: number) {
    this.strategy.pay(amount);
  }
}
