import { Meal } from "../products/Meal";

export interface IMealBuilder {
  addMainCourse(): this;
  addDrink(): this;
  addSide(): this;
  getResult(): Meal;
}
