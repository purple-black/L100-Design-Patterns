// Abstract Expression: all expressions must implement the interpret method
import { Context } from "../context/Context";

export interface IAbstractExpression {
  interpret(context: Context): number;
}
