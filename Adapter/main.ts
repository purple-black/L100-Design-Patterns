// Client code using only the PaymentProcessor interface

import { IPaymentProcessor } from "./interfaces/PaymentProcessor";
import { PaymentAdapter } from "./adapters/PaymentAdapter";

function processTransaction(processor: IPaymentProcessor, amount: number): void {
    console.log("Processing payment...");
    processor.pay(amount);
}

const paymentProcessor = new PaymentAdapter();
processTransaction(paymentProcessor, 1000);
