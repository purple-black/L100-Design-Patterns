import { MealBuilder } from "../interfaces/MealBuilder";

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
