"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContext = void 0;
// Context Class that uses a Payment Strategy
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    // Change the strategy dynamically
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    // Execute payment with chosen strategy
    executePayment(amount) {
        this.strategy.pay(amount);
    }
}
exports.PaymentContext = PaymentContext;
//# sourceMappingURL=PaymentContext.js.map