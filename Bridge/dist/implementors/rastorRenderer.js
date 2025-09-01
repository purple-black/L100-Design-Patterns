"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RasterRenderer = void 0;
class RasterRenderer {
    drawCircle(x, y, radius) {
        console.log(`RasterRenderer: Drawing pixels for circle at (${x}, ${y}) with radius ${radius}`);
    }
    drawRectangle(x, y, width, height) {
        console.log(`RasterRenderer: Drawing pixel-based rectangle at (${x}, ${y}) width=${width}, height=${height}`);
    }
}
exports.RasterRenderer = RasterRenderer;
//# sourceMappingURL=rastorRenderer.js.map