"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtractExpression = void 0;
var SubtractExpression = /** @class */ (function () {
    function SubtractExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    SubtractExpression.prototype.interpret = function (context) {
        return this.left.interpret(context) - this.right.interpret(context);
    };
    return SubtractExpression;
}());
exports.SubtractExpression = SubtractExpression;
