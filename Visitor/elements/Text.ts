import { Element } from "./Element";
import { Visitor } from "../visitors/Visitor";

// Concrete Element: Text
export class Text implements Element {
    constructor(public content: string) {}

    accept(visitor: Visitor): void {
        visitor.visitText(this);
    }
}
