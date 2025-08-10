"use strict";
// Concrete Decorator: Whipped cream
// Extends the base decorator and adds behavior.
// In this case, it adds 20 to the cost and appends " + Whipped Cream" to the description.
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
exports.WhippedCreamDecorator = void 0;
var CoffeeDecorator_1 = require("./CoffeeDecorator");
var WhippedCreamDecorator = /** @class */ (function (_super) {
    __extends(WhippedCreamDecorator, _super);
    function WhippedCreamDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhippedCreamDecorator.prototype.cost = function () {
        return _super.prototype.cost.call(this) + 20;
    };
    WhippedCreamDecorator.prototype.description = function () {
        return _super.prototype.description.call(this) + " + Whipped Cream";
    };
    return WhippedCreamDecorator;
}(CoffeeDecorator_1.CoffeeDecorator));
exports.WhippedCreamDecorator = WhippedCreamDecorator;
