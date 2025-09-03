import { IDrawingAPI } from "../implementors/drawingAPI";

// cant be instatiated directly and is a base class for different shapes.
export abstract class Shape {
    protected drawingAPI: IDrawingAPI; // accessible from the class and its subclasses

    constructor(drawingAPI: IDrawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    abstract draw(): void;
}
