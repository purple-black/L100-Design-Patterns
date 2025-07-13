import { Shape } from './Shape';
import { DrawingAPI } from '../implementors/drawingAPI';

// Refined Abstraction, a specific implementation of the high-level Shape abstraction.
export class Circle extends Shape {
    private x: number;
    private y: number;
    private radius: number;

    constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
        super(drawingAPI); //Calls the constructor of the parent class (Shape) and passes the drawingAPI to it.
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(): void {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }
}
