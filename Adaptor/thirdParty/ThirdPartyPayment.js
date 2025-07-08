"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyPayment = void 0;
// Adaptee: Third-party class with a different interface
var ThirdPartyPayment = /** @class */ (function () {
    function ThirdPartyPayment() {
    }
    ThirdPartyPayment.prototype.makePayment = function (value) {
        console.log("Third-party payment of ".concat(value, " completed"));
    };
    return ThirdPartyPayment;
}());
exports.ThirdPartyPayment = ThirdPartyPayment;
