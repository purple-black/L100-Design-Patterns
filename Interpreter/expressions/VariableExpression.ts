import { IAbstractExpression } from "./AbstractExpression";
import { Context } from "../context/Context";

// Terminal Expression for variables
export class VariableExpression implements IAbstractExpression {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  interpret(context: Context): number {
    return context.getVariable(this.name);
  }
}
