// Concrete Visitor: Render elements to screen
import { IVisitor } from "./Visitor";
import { Text } from "../elements/Text";
import { ImageElement } from "../elements/ImageElement";
import { Table } from "../elements/Table";

export class RenderVisitor implements IVisitor {
    visitText(text: Text): void {
        console.log(`Rendering Text: "${text.content}"`);
    }

    visitImage(image: ImageElement): void {
        console.log(`Rendering Image: ${image.filename}`);
    }

    visitTable(table: Table): void {
        console.log(`Rendering Table with ${table.rows} rows and ${table.columns} columns`);
    }
}
