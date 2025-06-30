"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileToast = void 0;
var MobileToast = /** @class */ (function () {
    function MobileToast() {
    }
    MobileToast.prototype.display = function (message) {
        console.log("Mobile Toast: ".concat(message));
    };
    return MobileToast;
}());
exports.MobileToast = MobileToast;
