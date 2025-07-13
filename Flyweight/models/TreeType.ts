// Shared Intrinsic State
export class TreeType {
    constructor(
        public name: string,
        public color: string,
        public texture: string
    ) {}

    public draw(x: number, y: number): void {
        console.log(
        `Drawing tree of type ${this.name} at (${x}, ${y}) with color ${this.color} and texture ${this.texture}`
        );
    }
}
