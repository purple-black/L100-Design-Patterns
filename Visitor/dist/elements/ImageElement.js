"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageElement = void 0;
// Concrete Element: Image
class ImageElement {
    constructor(filename) {
        this.filename = filename;
    }
    accept(visitor) {
        visitor.visitImage(this);
    }
}
exports.ImageElement = ImageElement;
//# sourceMappingURL=ImageElement.js.map