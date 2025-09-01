import { Meal } from "../products/Meal";

export interface MealBuilder {
  addMainCourse(): this;
  addDrink(): this;
  addSide(): this;
  getResult(): Meal;
}
