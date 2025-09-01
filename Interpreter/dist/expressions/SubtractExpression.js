"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtractExpression = void 0;
class SubtractExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret(context) {
        return this.left.interpret(context) - this.right.interpret(context);
    }
}
exports.SubtractExpression = SubtractExpression;
//# sourceMappingURL=SubtractExpression.js.map