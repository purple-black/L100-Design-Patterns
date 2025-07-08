// Target Interface: This is what your app expects
export interface PaymentProcessor {
    pay(amount: number): void;
}
