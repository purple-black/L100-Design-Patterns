// Non-Terminal Expression: subtracts two expressions
import { AbstractExpression } from "./AbstractExpression";
import { Context } from "../context/Context";

export class SubtractExpression implements AbstractExpression {
  private left: AbstractExpression;
  private right: AbstractExpression;

  constructor(left: AbstractExpression, right: AbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(context: Context): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}
