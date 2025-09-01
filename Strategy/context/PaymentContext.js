"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContext = void 0;
// Context Class that uses a Payment Strategy
var PaymentContext = /** @class */ (function () {
    function PaymentContext(strategy) {
        this.strategy = strategy;
    }
    // Change the strategy dynamically
    PaymentContext.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    // Execute payment with chosen strategy
    PaymentContext.prototype.executePayment = function (amount) {
        this.strategy.pay(amount);
    };
    return PaymentContext;
}());
exports.PaymentContext = PaymentContext;
