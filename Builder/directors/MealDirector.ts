import { IMealBuilder } from "../interfaces/MealBuilder";

export class MealDirector {
  constructor(private builder: IMealBuilder) {}

  constructFullMeal() {
    return this.builder
      .addMainCourse()
      .addDrink()
      .addSide()
      .getResult();
  }
}
