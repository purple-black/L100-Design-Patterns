"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealDirector = void 0;
var MealDirector = /** @class */ (function () {
    function MealDirector(builder) {
        this.builder = builder;
    }
    MealDirector.prototype.constructFullMeal = function () {
        return this.builder
            .addMainCourse()
            .addDrink()
            .addSide()
            .getResult();
    };
    return MealDirector;
}());
exports.MealDirector = MealDirector;
