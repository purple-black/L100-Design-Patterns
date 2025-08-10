// Concrete Decorator: Whipped cream
// Extends the base decorator and adds behavior.
// In this case, it adds 20 to the cost and appends " + Whipped Cream" to the description.

import { CoffeeDecorator } from "./CoffeeDecorator";

export class WhippedCreamDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 20;
    }

    description(): string {
        return super.description() + " + Whipped Cream";
    }
}
