// Adapter: Converts the ThirdPartyPayment interface into PaymentProcessor

import { PaymentProcessor } from "../interfaces/PaymentProcessor";
import { ThirdPartyPayment } from "../thirdParty/ThirdPartyPayment";

export class PaymentAdapter implements PaymentProcessor {
    private thirdPartyPayment: ThirdPartyPayment;

    constructor() {
        this.thirdPartyPayment = new ThirdPartyPayment();
    }

    pay(amount: number): void {
        // Translate 'pay' to 'makePayment'
        this.thirdPartyPayment.makePayment(amount);
    }
}
