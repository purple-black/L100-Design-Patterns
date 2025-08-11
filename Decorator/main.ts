// client code
// the client works only with the Coffee interface.

import { PlainCoffee } from "./components/PlainCoffee";
import { MilkDecorator } from "./decorators/MilkDecorator";
import { WhippedCreamDecorator } from "./decorators/WhippedCreamDecorator";

let coffee1 = new PlainCoffee();
coffee1 = new MilkDecorator(coffee1);
coffee1 = new WhippedCreamDecorator(coffee1);

console.log(`Order: ${coffee1.description()}`);
console.log(`Cost: $${coffee1.cost().toFixed(2)}`);

let coffee2 = new PlainCoffee();
coffee2 = new MilkDecorator(coffee2);

console.log(`Order: ${coffee2.description()}`);
console.log(`Cost: $${coffee2.cost().toFixed(2)}`);

let coffee3 = new PlainCoffee();
coffee3 = new WhippedCreamDecorator(coffee3);

console.log(`Order: ${coffee3.description()}`);
console.log(`Cost: $${coffee3.cost().toFixed(2)}`);


/*

//// without using decorator pattern ////

class Coffee {
    private hasMilk: boolean;
    private hasWhippedCream: boolean;

    constructor(milk: boolean = false, whippedCream: boolean = false) {
        this.hasMilk = milk;
        this.hasWhippedCream = whippedCream;
    }

    cost(): number {
        let price = 10; // base coffee
        if (this.hasMilk) price += 10;
        if (this.hasWhippedCream) price += 20;
        return price;
    }

    description(): string {
        let desc = "Plain Coffee";
        if (this.hasMilk) desc += " + Milk";
        if (this.hasWhippedCream) desc += " + Whipped Cream";
        return desc;
    }
}

// Usage
const coffee = new Coffee(true, true); // milk + whipped cream
console.log(`Order: ${coffee.description()}`); // Plain Coffee + Milk + Whipped Cream"
console.log(`Cost: $${coffee.cost().toFixed(2)}`);

*/



