// Concrete Visitor: Export elements to HTML
import { Visitor } from "./Visitor";
import { Text } from "../elements/Text";
import { ImageElement } from "../elements/ImageElement";
import { Table } from "../elements/Table";

export class ExportVisitor implements Visitor {
    visitText(text: Text): void {
        console.log(`<p>${text.content}</p>`);
    }

    visitImage(image: ImageElement): void {
        console.log(`<img src="${image.filename}" />`);
    }

    visitTable(table: Table): void {
        console.log(`<table rows="${table.rows}" cols="${table.columns}"></table>`);
    }
}
