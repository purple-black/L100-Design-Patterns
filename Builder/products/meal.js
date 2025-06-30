"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
var Meal = /** @class */ (function () {
    function Meal() {
    }
    Meal.prototype.describe = function () {
        console.log("Meal: ".concat(this.mainCourse, ", Drink: ").concat(this.drink, ", Side: ").concat(this.side));
    };
    return Meal;
}());
exports.Meal = Meal;
