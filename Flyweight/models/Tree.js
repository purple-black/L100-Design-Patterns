// Combines shared and unique state
export class Tree {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw() {
        this.type.draw(this.x, this.y); // draw method of the treetype class
    }
}
