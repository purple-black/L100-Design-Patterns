// Concrete Decorator: Milk
// Extends the base decorator and adds behavior.
// In this case, it adds 10 to the cost and appends " + Milk" to the description.

import { CoffeeDecorator } from "./CoffeeDecorator";

export class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 10;
    }

    description(): string {
        return super.description() + " + Milk";
    }
}
