"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileAlert = void 0;
var MobileAlert = /** @class */ (function () {
    function MobileAlert() {
    }
    MobileAlert.prototype.show = function (message) {
        console.log("Mobile Alert: ".concat(message));
    };
    return MobileAlert;
}());
exports.MobileAlert = MobileAlert;
