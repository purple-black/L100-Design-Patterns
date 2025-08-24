"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./context/Context");
var NumberExpression_1 = require("./expressions/NumberExpression");
var AddExpression_1 = require("./expressions/AddExpression");
var SubtractExpression_1 = require("./expressions/SubtractExpression");
// Client code
var context = new Context_1.Context();
// Building expression: (2 + 3) - 1
var expression = new SubtractExpression_1.SubtractExpression(new AddExpression_1.AddExpression(new NumberExpression_1.NumberExpression(2), new NumberExpression_1.NumberExpression(3)), new NumberExpression_1.NumberExpression(1));
console.log("(2 + 3) - 1 = " + expression.interpret(context));
