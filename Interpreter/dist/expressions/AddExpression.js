"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExpression = void 0;
class AddExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret(context) {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}
exports.AddExpression = AddExpression;
//# sourceMappingURL=AddExpression.js.map