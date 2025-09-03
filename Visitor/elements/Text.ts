import { IElement } from "./Element";
import { IVisitor } from "../visitors/Visitor";

// Concrete Element: Text
export class Text implements IElement {
    constructor(public content: string) {}

    accept(visitor: IVisitor): void {
        visitor.visitText(this);
    }
}
