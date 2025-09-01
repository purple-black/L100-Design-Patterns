"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level1Handler = void 0;
const Handler_1 = require("./Handler");
class Level1Handler extends Handler_1.Handler {
    handleRequest(level) {
        if (level === 1) {
            console.log("Level 1 Support: Handling basic issue.");
        }
        else if (this.nextHandler) {
            console.log("Level 1 Support: Escalating to Level 2...");
            this.nextHandler.handleRequest(level);
        }
        else {
            console.log("Level 1 Support: Cannot handle the issue. No more escalation possible.");
        }
    }
}
exports.Level1Handler = Level1Handler;
//# sourceMappingURL=Level1Handler.js.map