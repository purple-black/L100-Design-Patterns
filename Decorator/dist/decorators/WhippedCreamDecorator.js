"use strict";
// Concrete Decorator: Whipped cream
// Extends the base decorator and adds behavior.
// In this case, it adds 20 to the cost and appends " + Whipped Cream" to the description.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhippedCreamDecorator = void 0;
const CoffeeDecorator_1 = require("./CoffeeDecorator");
class WhippedCreamDecorator extends CoffeeDecorator_1.CoffeeDecorator {
    cost() {
        return super.cost() + 20;
    }
    description() {
        return super.description() + " + Whipped Cream";
    }
}
exports.WhippedCreamDecorator = WhippedCreamDecorator;
//# sourceMappingURL=WhippedCreamDecorator.js.map