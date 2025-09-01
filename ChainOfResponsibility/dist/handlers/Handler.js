"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
// Abstract Handler class
class Handler {
    constructor() {
        this.nextHandler = null;
    }
    // Set the next handler in the chain
    setNext(handler) {
        this.nextHandler = handler;
        return handler; // returning handler allows chaining easily
    }
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map