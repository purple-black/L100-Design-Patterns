"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonVegMealBuilder = void 0;
const Meal_1 = require("../products/Meal");
class NonVegMealBuilder {
    constructor() {
        this.meal = new Meal_1.Meal();
    }
    addMainCourse() {
        this.meal.mainCourse = "Chicken Biriyani";
        return this;
    }
    addDrink() {
        this.meal.drink = "Chocolate Milkshake";
        return this;
    }
    addSide() {
        this.meal.side = "Chicken Fries";
        return this;
    }
    getResult() {
        return this.meal;
    }
}
exports.NonVegMealBuilder = NonVegMealBuilder;
//# sourceMappingURL=NonVegMealBuilder.js.map