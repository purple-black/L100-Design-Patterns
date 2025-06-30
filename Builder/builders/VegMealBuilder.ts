import { Meal } from "../products/meal";
import { MealBuilder } from "../interfaces/mealBuilder";

export class VegMealBuilder implements MealBuilder {
  private meal: Meal = new Meal();

  addMainCourse(): this {
    this.meal.mainCourse = "Paneer Fried rice";
    return this;
  }

  addDrink(): this {
    this.meal.drink = "Mango Juice";
    return this;
  }

  addSide(): this {
    this.meal.side = "Salad";
    return this;
  }

  getResult(): Meal {
    return this.meal;
  }
}
