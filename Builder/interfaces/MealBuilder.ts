import { Meal } from "../products/meal";

export interface MealBuilder {
  addMainCourse(): this;
  addDrink(): this;
  addSide(): this;
  getResult(): Meal;
}
