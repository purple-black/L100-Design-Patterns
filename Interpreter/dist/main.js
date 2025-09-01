"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Context_1 = require("./context/Context");
const NumberExpression_1 = require("./expressions/NumberExpression");
const AddExpression_1 = require("./expressions/AddExpression");
const SubtractExpression_1 = require("./expressions/SubtractExpression");
const VariableExpression_1 = require("./expressions/VariableExpression");
// Client code
const context = new Context_1.Context();
// Building expression: (2 + 3) - 1
const expression = new SubtractExpression_1.SubtractExpression(new AddExpression_1.AddExpression(new NumberExpression_1.NumberExpression(2), new NumberExpression_1.NumberExpression(3)), new NumberExpression_1.NumberExpression(1));
console.log("(2 + 3) - 1 = " + expression.interpret(context));
console.log("**************");
// set variable values
context.setVariable("x", 10);
context.setVariable("y", 4);
// Build expression: (x + 3) - y
const expression2 = new SubtractExpression_1.SubtractExpression(new AddExpression_1.AddExpression(new VariableExpression_1.VariableExpression("x"), new NumberExpression_1.NumberExpression(3)), new VariableExpression_1.VariableExpression("y"));
// Evaluate
console.log("(x + 3) - y = " + expression2.interpret(context));
//# sourceMappingURL=main.js.map