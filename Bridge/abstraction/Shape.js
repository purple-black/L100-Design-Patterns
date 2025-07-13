"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
// cant be instatiated directly and is a base class for different shapes.
var Shape = /** @class */ (function () {
    function Shape(drawingAPI) {
        this.drawingAPI = drawingAPI;
    }
    return Shape;
}());
exports.Shape = Shape;
