"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebToast = void 0;
var WebToast = /** @class */ (function () {
    function WebToast() {
    }
    WebToast.prototype.display = function (message) {
        console.log("Web Toast: ".concat(message));
    };
    return WebToast;
}());
exports.WebToast = WebToast;
