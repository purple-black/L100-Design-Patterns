// Target Interface: This is what your app expects
export interface IPaymentProcessor {
    pay(amount: number): void;
}
