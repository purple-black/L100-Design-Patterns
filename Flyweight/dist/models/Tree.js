"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
// Combines shared and unique state
class Tree {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw() {
        this.type.draw(this.x, this.y); // draw method of the treetype class
    }
}
exports.Tree = Tree;
