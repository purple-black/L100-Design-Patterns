import { VectorRenderer } from "./implementors/VectorRenderer";
import { RasterRenderer } from "./implementors/RastorRenderer";
import { Circle } from "./abstraction/Circle";
import { Rectangle } from "./abstraction/rectangle";

const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

const circle1 = new Circle(5, 10, 15, vectorRenderer);
const circle2 = new Circle(20, 30, 10, rasterRenderer);
const rectangle = new Rectangle(20, 30, 40, 25, rasterRenderer);

circle1.draw();  // VectorRenderer: Drawing circle at (5, 10) with radius 15
circle2.draw();  // RasterRenderer: Drawing pixels for circle at (20, 30) with radius 10
rectangle.draw();
