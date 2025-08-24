import { Element } from "./Element";
import { Visitor } from "../visitors/Visitor";

// Concrete Element: Table
export class Table implements Element {
    constructor(public rows: number, public columns: number) {}

    accept(visitor: Visitor): void {
        visitor.visitTable(this);
    }
}
