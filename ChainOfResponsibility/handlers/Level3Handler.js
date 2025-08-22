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
exports.Level3Handler = void 0;
var Handler_1 = require("./Handler");
var Level3Handler = /** @class */ (function (_super) {
    __extends(Level3Handler, _super);
    function Level3Handler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level3Handler.prototype.handleRequest = function (level) {
        if (level === 3) {
            console.log("Level 3 Support: Handling critical issue.");
        }
        else {
            console.log("Level 3 Support: Cannot handle the issue. No more escalation possible.");
        }
    };
    return Level3Handler;
}(Handler_1.Handler));
exports.Level3Handler = Level3Handler;
