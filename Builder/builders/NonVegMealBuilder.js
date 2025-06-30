"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonVegMealBuilder = void 0;
var meal_1 = require("../products/meal");
var NonVegMealBuilder = /** @class */ (function () {
    function NonVegMealBuilder() {
        this.meal = new meal_1.Meal();
    }
    NonVegMealBuilder.prototype.addMainCourse = function () {
        this.meal.mainCourse = "Chicken Biriyani";
        return this;
    };
    NonVegMealBuilder.prototype.addDrink = function () {
        this.meal.drink = "Chocolate Milkshake";
        return this;
    };
    NonVegMealBuilder.prototype.addSide = function () {
        this.meal.side = "Chicken Fries";
        return this;
    };
    NonVegMealBuilder.prototype.getResult = function () {
        return this.meal;
    };
    return NonVegMealBuilder;
}());
exports.NonVegMealBuilder = NonVegMealBuilder;
