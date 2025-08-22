// Strategy Interface
export interface PaymentStrategy {
  pay(amount: number): void;
}
