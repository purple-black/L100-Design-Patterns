"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageElement = void 0;
// Concrete Element: Image
var ImageElement = /** @class */ (function () {
    function ImageElement(filename) {
        this.filename = filename;
    }
    ImageElement.prototype.accept = function (visitor) {
        visitor.visitImage(this);
    };
    return ImageElement;
}());
exports.ImageElement = ImageElement;
