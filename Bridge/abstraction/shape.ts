import { DrawingAPI } from "../implementors/drawingAPI";

// cant be instatiated directly and is a base class for different shapes.
export abstract class Shape {
    protected drawingAPI: DrawingAPI; // accessible from the class and its subclasses

    constructor(drawingAPI: DrawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    abstract draw(): void;
}
