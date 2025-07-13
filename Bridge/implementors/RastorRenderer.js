"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RasterRenderer = void 0;
var RasterRenderer = /** @class */ (function () {
    function RasterRenderer() {
    }
    RasterRenderer.prototype.drawCircle = function (x, y, radius) {
        console.log("RasterRenderer: Drawing pixels for circle at (".concat(x, ", ").concat(y, ") with radius ").concat(radius));
    };
    RasterRenderer.prototype.drawRectangle = function (x, y, width, height) {
        console.log("RasterRenderer: Drawing pixel-based rectangle at (".concat(x, ", ").concat(y, ") width=").concat(width, ", height=").concat(height));
    };
    return RasterRenderer;
}());
exports.RasterRenderer = RasterRenderer;
