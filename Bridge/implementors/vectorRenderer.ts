import { DrawingAPI } from './drawingAPI';

export class VectorRenderer implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`VectorRenderer: Drawing circle at (${x}, ${y}) with radius ${radius}`);
    }

    drawRectangle(x: number, y: number, width: number, height: number): void {
        console.log(`VectorRenderer: Drawing rectangle at (${x}, ${y}) width=${width}, height=${height}`);
    }

}
