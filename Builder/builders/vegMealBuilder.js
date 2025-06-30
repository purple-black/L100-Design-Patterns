"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VegMealBuilder = void 0;
var meal_1 = require("../products/meal");
var VegMealBuilder = /** @class */ (function () {
    function VegMealBuilder() {
        this.meal = new meal_1.Meal();
    }
    VegMealBuilder.prototype.addMainCourse = function () {
        this.meal.mainCourse = "Paneer Fried rice";
        return this;
    };
    VegMealBuilder.prototype.addDrink = function () {
        this.meal.drink = "Mango Juice";
        return this;
    };
    VegMealBuilder.prototype.addSide = function () {
        this.meal.side = "Salad";
        return this;
    };
    VegMealBuilder.prototype.getResult = function () {
        return this.meal;
    };
    return VegMealBuilder;
}());
exports.VegMealBuilder = VegMealBuilder;
