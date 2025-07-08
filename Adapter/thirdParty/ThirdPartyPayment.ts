// Adaptee: Third-party class with a different interface
export class ThirdPartyPayment {
    makePayment(value: number): void {
        console.log(`Third-party payment of ${value} completed`);
    }
}
