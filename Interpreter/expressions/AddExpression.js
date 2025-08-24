"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExpression = void 0;
var AddExpression = /** @class */ (function () {
    function AddExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    AddExpression.prototype.interpret = function (context) {
        return this.left.interpret(context) + this.right.interpret(context);
    };
    return AddExpression;
}());
exports.AddExpression = AddExpression;
