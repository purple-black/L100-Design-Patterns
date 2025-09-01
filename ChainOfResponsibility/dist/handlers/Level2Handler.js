"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level2Handler = void 0;
const Handler_1 = require("./Handler");
class Level2Handler extends Handler_1.Handler {
    handleRequest(level) {
        if (level === 2) {
            console.log("Level 2 Support: Handling intermediate issue.");
        }
        else if (this.nextHandler) {
            console.log("Level 2 Support: Escalating to Level 3...");
            this.nextHandler.handleRequest(level);
        }
        else {
            console.log("Level 2 Support: Cannot handle the issue. No more escalation possible.");
        }
    }
}
exports.Level2Handler = Level2Handler;
//# sourceMappingURL=Level2Handler.js.map