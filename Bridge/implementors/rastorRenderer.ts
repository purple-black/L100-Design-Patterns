import { IDrawingAPI } from './drawingAPI';

export class RasterRenderer implements IDrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`RasterRenderer: Drawing pixels for circle at (${x}, ${y}) with radius ${radius}`);
    }

    drawRectangle(x: number, y: number, width: number, height: number): void {
        console.log(`RasterRenderer: Drawing pixel-based rectangle at (${x}, ${y}) width=${width}, height=${height}`);
    }

}
