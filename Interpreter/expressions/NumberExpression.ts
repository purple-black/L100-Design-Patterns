// Terminal Expression: simply returns the number
import { AbstractExpression } from "./AbstractExpression";
import { Context } from "../context/Context";

export class NumberExpression implements AbstractExpression {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  interpret(_context: Context): number {
    return this.value;
  }
}
