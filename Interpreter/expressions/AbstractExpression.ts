// Abstract Expression: all expressions must implement the interpret method
import { Context } from "../context/Context";

export interface AbstractExpression {
  interpret(context: Context): number;
}
