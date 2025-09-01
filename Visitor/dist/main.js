"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = require("./elements/Text");
const ImageElement_1 = require("./elements/ImageElement");
const Table_1 = require("./elements/Table");
const RenderVisitor_1 = require("./visitors/RenderVisitor");
const ExportVisitor_1 = require("./visitors/ExportVisitor");
// Create some elements
const doc = [
    new Text_1.Text("Visitor Pattern"),
    new ImageElement_1.ImageElement("image.png"),
    new Table_1.Table(3, 4),
];
// Create visitors
const renderVisitor = new RenderVisitor_1.RenderVisitor();
const exportVisitor = new ExportVisitor_1.ExportVisitor();
console.log("Rendering Document");
doc.forEach(el => el.accept(renderVisitor));
console.log("\nExporting Document");
doc.forEach(el => el.accept(exportVisitor));
//# sourceMappingURL=main.js.map