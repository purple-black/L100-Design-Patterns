"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpiPayment = void 0;
// Concrete Strategy for UPI
class UpiPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI.`);
    }
}
exports.UpiPayment = UpiPayment;
//# sourceMappingURL=UpiPayment.js.map