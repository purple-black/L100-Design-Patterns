"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderVisitor = void 0;
var RenderVisitor = /** @class */ (function () {
    function RenderVisitor() {
    }
    RenderVisitor.prototype.visitText = function (text) {
        console.log("Rendering Text: \"".concat(text.content, "\""));
    };
    RenderVisitor.prototype.visitImage = function (image) {
        console.log("Rendering Image: ".concat(image.filename));
    };
    RenderVisitor.prototype.visitTable = function (table) {
        console.log("Rendering Table with ".concat(table.rows, " rows and ").concat(table.columns, " columns"));
    };
    return RenderVisitor;
}());
exports.RenderVisitor = RenderVisitor;
