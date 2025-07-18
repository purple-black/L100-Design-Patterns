import { Shape } from './Shape';
import { DrawingAPI } from '../implementors/drawingAPI';

export class Rectangle extends Shape {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x: number, y: number, width: number, height: number, drawingAPI: DrawingAPI) {
        super(drawingAPI);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(): void {
        this.drawingAPI.drawRectangle(this.x, this.y, this.width, this.height);
    }
}
