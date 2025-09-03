import { Meal } from "../products/Meal";
import { IMealBuilder } from "../interfaces/MealBuilder";

export class VegMealBuilder implements IMealBuilder {
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
