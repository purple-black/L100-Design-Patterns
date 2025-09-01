"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
// Concrete Strategy for PayPal
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using PayPal."));
    };
    return PayPalPayment;
}());
exports.PayPalPayment = PayPalPayment;
