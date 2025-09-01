"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealDirector = void 0;
class MealDirector {
    constructor(builder) {
        this.builder = builder;
    }
    constructFullMeal() {
        return this.builder
            .addMainCourse()
            .addDrink()
            .addSide()
            .getResult();
    }
}
exports.MealDirector = MealDirector;
//# sourceMappingURL=MealDirector.js.map