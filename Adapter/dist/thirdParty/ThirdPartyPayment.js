"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyPayment = void 0;
// Adaptee: Third-party class with a different interface
class ThirdPartyPayment {
    makePayment(value) {
        console.log(`Third-party payment of ${value} completed`);
    }
}
exports.ThirdPartyPayment = ThirdPartyPayment;
//# sourceMappingURL=ThirdPartyPayment.js.map