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



