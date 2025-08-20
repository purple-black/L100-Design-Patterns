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
exports.User1 = void 0;
var User_1 = require("./User");
var User1 = /** @class */ (function (_super) {
    __extends(User1, _super);
    function User1(name, mediator) {
        return _super.call(this, name, mediator) || this;
    }
    User1.prototype.send = function (message, receiver) {
        console.log("[User1: ".concat(this.name, "] sends: ").concat(message));
        this.mediator.sendMessage(message, this, receiver);
    };
    User1.prototype.receive = function (message, sender) {
        console.log("[User1: ".concat(this.name, "] receives from [").concat(sender.getName(), "]: ").concat(message));
    };
    return User1;
}(User_1.User));
exports.User1 = User1;
