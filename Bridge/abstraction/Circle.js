"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Shape_1 = require("./Shape");
// Refined Abstraction, a specific implementation of the high-level Shape abstraction.
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius, drawingAPI) {
        var _this = _super.call(this, drawingAPI) || this; //Calls the constructor of the parent class (Shape) and passes the drawingAPI to it.
        _this.x = x;
        _this.y = y;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
