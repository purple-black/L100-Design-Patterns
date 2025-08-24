"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportVisitor = void 0;
var ExportVisitor = /** @class */ (function () {
    function ExportVisitor() {
    }
    ExportVisitor.prototype.visitText = function (text) {
        console.log("<p>".concat(text.content, "</p>"));
    };
    ExportVisitor.prototype.visitImage = function (image) {
        console.log("<img src=\"".concat(image.filename, "\" />"));
    };
    ExportVisitor.prototype.visitTable = function (table) {
        console.log("<table rows=\"".concat(table.rows, "\" cols=\"").concat(table.columns, "\"></table>"));
    };
    return ExportVisitor;
}());
exports.ExportVisitor = ExportVisitor;
