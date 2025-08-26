"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableExpression = void 0;
// Terminal Expression for variables
class VariableExpression {
    constructor(name) {
        this.name = name;
    }
    interpret(context) {
        return context.getVariable(this.name);
    }
}
exports.VariableExpression = VariableExpression;
