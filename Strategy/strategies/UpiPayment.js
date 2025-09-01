"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpiPayment = void 0;
// Concrete Strategy for UPI
var UpiPayment = /** @class */ (function () {
    function UpiPayment() {
    }
    UpiPayment.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using UPI."));
    };
    return UpiPayment;
}());
exports.UpiPayment = UpiPayment;
