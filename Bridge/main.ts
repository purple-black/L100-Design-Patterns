import { VectorRenderer } from "./implementors/vectorRenderer";
import { RasterRenderer } from "./implementors/rastorRenderer";
import { Circle } from "./abstraction/circle";
import { Rectangle } from "./abstraction/rectangle";

const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

const circle1 = new Circle(5, 10, 15, vectorRenderer);
const circle2 = new Circle(20, 30, 10, rasterRenderer);
const rectangle1 = new Rectangle(20, 30, 40, 25, rasterRenderer);
const rectangle2 = new Rectangle(20, 30, 40, 25, vectorRenderer);

circle1.draw();  // VectorRenderer: Drawing circle at (5, 10) with radius 15
circle2.draw();  // RasterRenderer: Drawing pixels for circle at (20, 30) with radius 10
rectangle1.draw();
rectangle2.draw();
