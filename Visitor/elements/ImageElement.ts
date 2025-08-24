import { Element } from "./Element";
import { Visitor } from "../visitors/Visitor";

// Concrete Element: Image
export class ImageElement implements Element {
    constructor(public filename: string) {}

    accept(visitor: Visitor): void {
        visitor.visitImage(this);
    }
}
