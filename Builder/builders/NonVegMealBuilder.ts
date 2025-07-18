import { Meal } from "../products/meal";
import { MealBuilder } from "../interfaces/mealBuilder";

export class NonVegMealBuilder implements MealBuilder {
  private meal: Meal = new Meal();

  addMainCourse(): this {
    this.meal.mainCourse = "Chicken Biriyani";
    return this;
  }

  addDrink(): this {
    this.meal.drink = "Chocolate Milkshake";
    return this;
  }

  addSide(): this {
    this.meal.side = "Chicken Fries";
    return this;
  }

  getResult(): Meal {
    return this.meal;
  }
}
