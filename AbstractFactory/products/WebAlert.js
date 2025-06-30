"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAlert = void 0;
var WebAlert = /** @class */ (function () {
    function WebAlert() {
    }
    WebAlert.prototype.show = function (message) {
        console.log("Web Alert: ".concat(message));
    };
    return WebAlert;
}());
exports.WebAlert = WebAlert;
