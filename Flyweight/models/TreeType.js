// Shared Intrinsic State
export class TreeType {
    constructor(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }
    draw(x, y) {
        console.log(`Drawing tree of type ${this.name} at (${x}, ${y}) with color ${this.color} and texture ${this.texture}`);
    }
}
