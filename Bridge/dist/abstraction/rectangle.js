"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(x, y, width, height, drawingAPI) {
        super(drawingAPI);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        this.drawingAPI.drawRectangle(this.x, this.y, this.width, this.height);
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map