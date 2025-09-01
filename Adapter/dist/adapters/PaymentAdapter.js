"use strict";
// Adapter: Converts the ThirdPartyPayment interface into PaymentProcessor
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdapter = void 0;
const ThirdPartyPayment_1 = require("../thirdParty/ThirdPartyPayment");
class PaymentAdapter {
    constructor() {
        this.thirdPartyPayment = new ThirdPartyPayment_1.ThirdPartyPayment();
    }
    pay(amount) {
        // Translate 'pay' to 'makePayment'
        this.thirdPartyPayment.makePayment(amount);
    }
}
exports.PaymentAdapter = PaymentAdapter;
//# sourceMappingURL=PaymentAdapter.js.map