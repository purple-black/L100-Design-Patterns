import { IElement } from "./Element";
import { IVisitor } from "../visitors/Visitor";

// Concrete Element: Image
export class ImageElement implements IElement {
    constructor(public filename: string) {}

    accept(visitor: IVisitor): void {
        visitor.visitImage(this);
    }
}
