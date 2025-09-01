"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportVisitor = void 0;
class ExportVisitor {
    visitText(text) {
        console.log(`<p>${text.content}</p>`);
    }
    visitImage(image) {
        console.log(`<img src="${image.filename}" />`);
    }
    visitTable(table) {
        console.log(`<table rows="${table.rows}" cols="${table.columns}"></table>`);
    }
}
exports.ExportVisitor = ExportVisitor;
//# sourceMappingURL=ExportVisitor.js.map