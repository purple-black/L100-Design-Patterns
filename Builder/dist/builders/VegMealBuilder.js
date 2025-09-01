"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VegMealBuilder = void 0;
const Meal_1 = require("../products/Meal");
class VegMealBuilder {
    constructor() {
        this.meal = new Meal_1.Meal();
    }
    addMainCourse() {
        this.meal.mainCourse = "Paneer Fried rice";
        return this;
    }
    addDrink() {
        this.meal.drink = "Mango Juice";
        return this;
    }
    addSide() {
        this.meal.side = "Salad";
        return this;
    }
    getResult() {
        return this.meal;
    }
}
exports.VegMealBuilder = VegMealBuilder;
//# sourceMappingURL=VegMealBuilder.js.map