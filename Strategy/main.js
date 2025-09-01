"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentContext_1 = require("./context/PaymentContext");
var CreditCardPayment_1 = require("./strategies/CreditCardPayment");
var PayPalPayment_1 = require("./strategies/PayPalPayment");
var UpiPayment_1 = require("./strategies/UpiPayment");
// Client Code
var paymentContext = new PaymentContext_1.PaymentContext(new CreditCardPayment_1.CreditCardPayment());
paymentContext.executePayment(1000); // Paid 1000 using Credit Card.
paymentContext.setStrategy(new PayPalPayment_1.PayPalPayment());
paymentContext.executePayment(2000); // Paid 2000 using PayPal.
paymentContext.setStrategy(new UpiPayment_1.UpiPayment());
paymentContext.executePayment(500); // Paid 500 using UPI.
