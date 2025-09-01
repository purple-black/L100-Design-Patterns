"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level3Handler = void 0;
const Handler_1 = require("./Handler");
class Level3Handler extends Handler_1.Handler {
    handleRequest(level) {
        if (level === 3) {
            console.log("Level 3 Support: Handling critical issue.");
        }
        else {
            console.log("Level 3 Support: Cannot handle the issue. No more escalation possible.");
        }
    }
}
exports.Level3Handler = Level3Handler;
//# sourceMappingURL=Level3Handler.js.map