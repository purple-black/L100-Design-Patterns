"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level1Handler = void 0;
var Handler_1 = require("./Handler");
var Level1Handler = /** @class */ (function (_super) {
    __extends(Level1Handler, _super);
    function Level1Handler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level1Handler.prototype.handleRequest = function (level) {
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
    };
    return Level1Handler;
}(Handler_1.Handler));
exports.Level1Handler = Level1Handler;
