"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Text_1 = require("./elements/Text");
var ImageElement_1 = require("./elements/ImageElement");
var Table_1 = require("./elements/Table");
var RenderVisitor_1 = require("./visitors/RenderVisitor");
var ExportVisitor_1 = require("./visitors/ExportVisitor");
// Create some elements
var doc = [
    new Text_1.Text("Visitor Pattern"),
    new ImageElement_1.ImageElement("image.png"),
    new Table_1.Table(3, 4),
];
// Create visitors
var renderVisitor = new RenderVisitor_1.RenderVisitor();
var exportVisitor = new ExportVisitor_1.ExportVisitor();
console.log("Rendering Document");
doc.forEach(function (el) { return el.accept(renderVisitor); });
console.log("\nExporting Document");
doc.forEach(function (el) { return el.accept(exportVisitor); });
