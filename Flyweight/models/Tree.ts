import { TreeType } from "./TreeType";

// Combines shared and unique state
export class Tree {
    constructor(
        private x: number,
        private y: number,
        private type: TreeType
    ) {}

    public draw(): void {
        this.type.draw(this.x, this.y); // draw method of the treetype class
    }
}
