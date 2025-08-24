import { Text } from "./elements/Text";
import { ImageElement } from "./elements/ImageElement";
import { Table } from "./elements/Table";
import { RenderVisitor } from "./visitors/RenderVisitor";
import { ExportVisitor } from "./visitors/ExportVisitor";

// Create some elements
const doc = [
    new Text("Visitor Pattern"),
    new ImageElement("image.png"),
    new Table(3, 4),
];

// Create visitors
const renderVisitor = new RenderVisitor();
const exportVisitor = new ExportVisitor();

console.log("Rendering Document");
doc.forEach(el => el.accept(renderVisitor));

console.log("\nExporting Document");
doc.forEach(el => el.accept(exportVisitor));
