// Base Decorator
// This class implements the Coffee interface and wraps
// another Coffee object.
// It's abstract because it is not used directly — we extend it
// to create specific decorators. This is not called directly form the main.ts and the protected coffee can be assecible
// its subclasses and this class cannot be instantiated directly by external code

import { Coffee } from "../components/Coffee";

export abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost();
    }

    description(): string {
        return this.coffee.description();
    }
}
