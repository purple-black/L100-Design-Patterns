import { IElement } from "./Element";
import { IVisitor } from "../visitors/Visitor";

// Concrete Element: Table
export class Table implements IElement {
    constructor(public rows: number, public columns: number) {}

    accept(visitor: IVisitor): void {
        visitor.visitTable(this);
    }
}
