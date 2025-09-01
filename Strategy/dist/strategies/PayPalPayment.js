"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
// Concrete Strategy for PayPal
class PayPalPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using PayPal.`);
    }
}
exports.PayPalPayment = PayPalPayment;
//# sourceMappingURL=PayPalPayment.js.map