"use strict";
// client code
// the client works only with the Coffee interface.
Object.defineProperty(exports, "__esModule", { value: true });
var PlainCoffee_1 = require("./components/PlainCoffee");
var MilkDecorator_1 = require("./decorators/MilkDecorator");
var WhippedCreamDecorator_1 = require("./decorators/WhippedCreamDecorator");
var coffee1 = new PlainCoffee_1.PlainCoffee();
coffee1 = new MilkDecorator_1.MilkDecorator(coffee1);
coffee1 = new WhippedCreamDecorator_1.WhippedCreamDecorator(coffee1);
console.log("Order: ".concat(coffee1.description()));
console.log("Cost: $".concat(coffee1.cost().toFixed(2)));
var coffee2 = new PlainCoffee_1.PlainCoffee();
coffee2 = new MilkDecorator_1.MilkDecorator(coffee2);
console.log("Order: ".concat(coffee2.description()));
console.log("Cost: $".concat(coffee2.cost().toFixed(2)));
var coffee3 = new PlainCoffee_1.PlainCoffee();
coffee3 = new WhippedCreamDecorator_1.WhippedCreamDecorator(coffee3);
console.log("Order: ".concat(coffee3.description()));
console.log("Cost: $".concat(coffee3.cost().toFixed(2)));
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
