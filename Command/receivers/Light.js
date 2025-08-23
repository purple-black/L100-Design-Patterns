"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Light = void 0;
// Receiver class - Light
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.on = function () {
        console.log("Light is ON");
    };
    Light.prototype.off = function () {
        console.log("Light is OFF");
    };
    return Light;
}());
exports.Light = Light;
