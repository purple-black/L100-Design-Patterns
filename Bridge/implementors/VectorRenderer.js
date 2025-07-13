"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorRenderer = void 0;
var VectorRenderer = /** @class */ (function () {
    function VectorRenderer() {
    }
    VectorRenderer.prototype.drawCircle = function (x, y, radius) {
        console.log("VectorRenderer: Drawing circle at (".concat(x, ", ").concat(y, ") with radius ").concat(radius));
    };
    VectorRenderer.prototype.drawRectangle = function (x, y, width, height) {
        console.log("VectorRenderer: Drawing rectangle at (".concat(x, ", ").concat(y, ") width=").concat(width, ", height=").concat(height));
    };
    return VectorRenderer;
}());
exports.VectorRenderer = VectorRenderer;
