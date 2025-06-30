export class Meal {
  mainCourse?: string;
  drink?: string;
  side?: string;

  describe(): void {
    console.log(`Meal: ${this.mainCourse}, Drink: ${this.drink}, Side: ${this.side}`);
  }
}
