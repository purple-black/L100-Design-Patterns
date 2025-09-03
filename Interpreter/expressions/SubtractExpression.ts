// Non-Terminal Expression: subtracts two expressions
import { IAbstractExpression } from "./AbstractExpression";
import { Context } from "../context/Context";

export class SubtractExpression implements IAbstractExpression {
  private left: IAbstractExpression;
  private right: IAbstractExpression;

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(context: Context): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}
