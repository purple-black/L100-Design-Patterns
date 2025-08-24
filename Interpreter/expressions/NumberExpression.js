"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberExpression = void 0;
var NumberExpression = /** @class */ (function () {
    function NumberExpression(value) {
        this.value = value;
    }
    NumberExpression.prototype.interpret = function (_context) {
        return this.value;
    };
    return NumberExpression;
}());
exports.NumberExpression = NumberExpression;
