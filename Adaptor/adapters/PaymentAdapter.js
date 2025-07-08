"use strict";
// Adapter: Converts the ThirdPartyPayment interface into PaymentProcessor
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdapter = void 0;
var ThirdPartyPayment_1 = require("../thirdParty/ThirdPartyPayment");
var PaymentAdapter = /** @class */ (function () {
    function PaymentAdapter() {
        this.thirdPartyPayment = new ThirdPartyPayment_1.ThirdPartyPayment();
    }
    PaymentAdapter.prototype.pay = function (amount) {
        // Translate 'pay' to 'makePayment'
        this.thirdPartyPayment.makePayment(amount);
    };
    return PaymentAdapter;
}());
exports.PaymentAdapter = PaymentAdapter;
