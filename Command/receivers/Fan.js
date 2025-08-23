"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
// Receiver class - Fan
var Fan = /** @class */ (function () {
    function Fan() {
    }
    Fan.prototype.on = function () {
        console.log("Fan is ON");
    };
    Fan.prototype.off = function () {
        console.log("Fan is OFF");
    };
    return Fan;
}());
exports.Fan = Fan;
