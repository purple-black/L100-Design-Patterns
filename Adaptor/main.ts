// Client code using only the PaymentProcessor interface

import { PaymentProcessor } from "./interfaces/paymentProcessor";
import { PaymentAdapter } from "./adapters/PaymentAdapter";

function processTransaction(processor: PaymentProcessor, amount: number): void {
    console.log("Processing payment...");
    processor.pay(amount);
}

const paymentProcessor = new PaymentAdapter();
processTransaction(paymentProcessor, 1000);
