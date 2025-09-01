"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vectorRenderer_1 = require("./implementors/vectorRenderer");
const rastorRenderer_1 = require("./implementors/rastorRenderer");
const circle_1 = require("./abstraction/circle");
const rectangle_1 = require("./abstraction/rectangle");
const vectorRenderer = new vectorRenderer_1.VectorRenderer();
const rasterRenderer = new rastorRenderer_1.RasterRenderer();
const circle1 = new circle_1.Circle(5, 10, 15, vectorRenderer);
const circle2 = new circle_1.Circle(20, 30, 10, rasterRenderer);
const rectangle1 = new rectangle_1.Rectangle(20, 30, 40, 25, rasterRenderer);
const rectangle2 = new rectangle_1.Rectangle(20, 30, 40, 25, vectorRenderer);
circle1.draw(); // VectorRenderer: Drawing circle at (5, 10) with radius 15
circle2.draw(); // RasterRenderer: Drawing pixels for circle at (20, 30) with radius 10
rectangle1.draw();
rectangle2.draw();
//# sourceMappingURL=main.js.map