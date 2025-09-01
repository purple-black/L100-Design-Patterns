"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VectorRenderer_1 = require("./implementors/VectorRenderer");
var RastorRenderer_1 = require("./implementors/RastorRenderer");
var Circle_1 = require("./abstraction/Circle");
var rectangle_1 = require("./abstraction/rectangle");
var vectorRenderer = new VectorRenderer_1.VectorRenderer();
var rasterRenderer = new RastorRenderer_1.RasterRenderer();
var circle1 = new Circle_1.Circle(5, 10, 15, vectorRenderer);
var circle2 = new Circle_1.Circle(20, 30, 10, rasterRenderer);
var rectangle1 = new rectangle_1.Rectangle(20, 30, 40, 25, rasterRenderer);
var rectangle2 = new rectangle_1.Rectangle(20, 30, 40, 25, vectorRenderer);
circle1.draw(); // VectorRenderer: Drawing circle at (5, 10) with radius 15
circle2.draw(); // RasterRenderer: Drawing pixels for circle at (20, 30) with radius 10
rectangle1.draw();
rectangle2.draw();
