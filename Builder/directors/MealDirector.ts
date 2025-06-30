import { MealBuilder } from "../interfaces/mealBuilder";

export class MealDirector {
  constructor(private builder: MealBuilder) {}

  constructFullMeal() {
    return this.builder
      .addMainCourse()
      .addDrink()
      .addSide()
      .getResult();
  }
}
