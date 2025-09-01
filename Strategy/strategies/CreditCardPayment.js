"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
// Concrete Strategy for Credit Card
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using Credit Card."));
    };
    return CreditCardPayment;
}());
exports.CreditCardPayment = CreditCardPayment;
