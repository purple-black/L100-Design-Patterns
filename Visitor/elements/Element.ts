// Base Element interface
import { IVisitor } from "../visitors/Visitor";

export interface IElement {
    accept(visitor: IVisitor): void;
}
