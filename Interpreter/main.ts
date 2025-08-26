import { Context } from "./context/Context";
import { NumberExpression } from "./expressions/NumberExpression";
import { AddExpression } from "./expressions/AddExpression";
import { SubtractExpression } from "./expressions/SubtractExpression";
import { VariableExpression } from "./expressions/VariableExpression";

// Client code
const context = new Context();

// Building expression: (2 + 3) - 1
const expression = new SubtractExpression(
  new AddExpression(new NumberExpression(2), new NumberExpression(3)),
  new NumberExpression(1)
);

console.log("(2 + 3) - 1 = " + expression.interpret(context));

console.log("**************");

// set variable values
context.setVariable("x", 10);
context.setVariable("y", 4);

// Build expression: (x + 3) - y
const expression2 = new SubtractExpression(
  new AddExpression(new VariableExpression("x"), new NumberExpression(3)),
  new VariableExpression("y")
);

// Evaluate
console.log("(x + 3) - y = " + expression2.interpret(context));
