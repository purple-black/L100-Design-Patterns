"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
// Abstract Handler class
var Handler = /** @class */ (function () {
    function Handler() {
        this.nextHandler = null;
    }
    // Set the next handler in the chain
    Handler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler; // returning handler allows chaining easily
    };
    return Handler;
}());
exports.Handler = Handler;
