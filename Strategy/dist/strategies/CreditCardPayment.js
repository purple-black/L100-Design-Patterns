"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
// Concrete Strategy for Credit Card
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Credit Card.`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
//# sourceMappingURL=CreditCardPayment.js.map