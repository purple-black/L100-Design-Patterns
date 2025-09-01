"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeType = void 0;
// Shared Intrinsic State
class TreeType {
    constructor(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }
    draw(x, y) {
        console.log(`Drawing tree of type ${this.name} at (${x}, ${y}) with color ${this.color} and texture ${this.texture}`);
    }
}
exports.TreeType = TreeType;
//# sourceMappingURL=TreeType.js.map