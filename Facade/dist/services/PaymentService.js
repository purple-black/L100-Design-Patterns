"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    makePayment(userId, amount) {
        console.log(`Processing payment of ₹${amount} for user: ${userId}`);
        return true; // Assume payment is successful
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=PaymentService.js.map