// Visitor interface: defines visiting operations for each element type
import { Text } from "../elements/Text";
import { ImageElement } from "../elements/ImageElement";
import { Table } from "../elements/Table";

export interface IVisitor {
    visitText(text: Text): void;
    visitImage(image: ImageElement): void;
    visitTable(table: Table): void;
}
