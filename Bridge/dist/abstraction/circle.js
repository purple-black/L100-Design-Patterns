"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
// Refined Abstraction, a specific implementation of the high-level Shape abstraction.
class Circle extends shape_1.Shape {
    constructor(x, y, radius, drawingAPI) {
        super(drawingAPI); //Calls the constructor of the parent class (Shape) and passes the drawingAPI to it.
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    draw() {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map