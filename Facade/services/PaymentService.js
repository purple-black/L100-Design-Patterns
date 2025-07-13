"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
var PaymentService = /** @class */ (function () {
    function PaymentService() {
    }
    PaymentService.prototype.makePayment = function (userId, amount) {
        console.log("Processing payment of \u20B9".concat(amount, " for user: ").concat(userId));
        return true; // Assume payment is successful
    };
    return PaymentService;
}());
exports.PaymentService = PaymentService;
