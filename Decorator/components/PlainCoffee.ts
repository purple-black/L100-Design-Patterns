// Concrete Component
// This is the base object that is decorated.
// It implements the Coffee interface directly.

import { ICoffee } from "./Coffee";

export class PlainCoffee implements ICoffee {
    cost(): number {
        return 10;
    }

    description(): string {
        return "Plain Coffee";
    }
}
