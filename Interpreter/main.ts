import { Context } from "./context/Context";
import { NumberExpression } from "./expressions/NumberExpression";
import { AddExpression } from "./expressions/AddExpression";
import { SubtractExpression } from "./expressions/SubtractExpression";

// Client code
const context = new Context();

// Building expression: (2 + 3) - 1
const expression = new SubtractExpression(
  new AddExpression(new NumberExpression(2), new NumberExpression(3)),
  new NumberExpression(1)
);

console.log("(2 + 3) - 1 = " + expression.interpret(context));
