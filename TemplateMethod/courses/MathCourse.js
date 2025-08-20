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
exports.MathCourse = void 0;
var OnlineCourse_1 = require("../models/OnlineCourse");
// Concrete implementation for Math course
var MathCourse = /** @class */ (function (_super) {
    __extends(MathCourse, _super);
    function MathCourse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MathCourse.prototype.provideMaterials = function () {
        console.log("Providing math textbooks.");
    };
    MathCourse.prototype.conductExam = function () {
        console.log("Conducting math exam.");
    };
    return MathCourse;
}(OnlineCourse_1.OnlineCourse));
exports.MathCourse = MathCourse;
