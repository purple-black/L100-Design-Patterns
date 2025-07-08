"use strict";
// Client code using only the PaymentProcessor interface
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentAdapter_1 = require("./adapters/PaymentAdapter");
function processTransaction(processor, amount) {
    console.log("Processing payment...");
    processor.pay(amount);
}
var paymentProcessor = new PaymentAdapter_1.PaymentAdapter();
processTransaction(paymentProcessor, 1000);
