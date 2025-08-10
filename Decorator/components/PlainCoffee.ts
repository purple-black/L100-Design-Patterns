// Concrete Component
// This is the base object that is decorated.
// It implements the Coffee interface directly.

import { Coffee } from "./Coffee";

export class PlainCoffee implements Coffee {
    cost(): number {
        return 10;
    }

    description(): string {
        return "Plain Coffee";
    }
}
