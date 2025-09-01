"use strict";
// Concrete Decorator: Milk
// Extends the base decorator and adds behavior.
// In this case, it adds 10 to the cost and appends " + Milk" to the description.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
const CoffeeDecorator_1 = require("./CoffeeDecorator");
class MilkDecorator extends CoffeeDecorator_1.CoffeeDecorator {
    cost() {
        return super.cost() + 10;
    }
    description() {
        return super.description() + " + Milk";
    }
}
exports.MilkDecorator = MilkDecorator;
//# sourceMappingURL=MilkDecorator.js.map