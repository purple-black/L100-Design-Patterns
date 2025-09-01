"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderVisitor = void 0;
class RenderVisitor {
    visitText(text) {
        console.log(`Rendering Text: "${text.content}"`);
    }
    visitImage(image) {
        console.log(`Rendering Image: ${image.filename}`);
    }
    visitTable(table) {
        console.log(`Rendering Table with ${table.rows} rows and ${table.columns} columns`);
    }
}
exports.RenderVisitor = RenderVisitor;
//# sourceMappingURL=RenderVisitor.js.map