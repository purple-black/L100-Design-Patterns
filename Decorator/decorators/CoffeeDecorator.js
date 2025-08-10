"use strict";
// Base Decorator
// This class implements the Coffee interface and wraps
// another Coffee object.
// It's abstract because it is not used directly — we extend it
// to create specific decorators. This is not called directly form the main.ts and the protected coffee can be assecible
// its subclasses and this class cannot be instantiated directly by external code
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDecorator = void 0;
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffee) {
        this.coffee = coffee;
    }
    CoffeeDecorator.prototype.cost = function () {
        return this.coffee.cost();
    };
    CoffeeDecorator.prototype.description = function () {
        return this.coffee.description();
    };
    return CoffeeDecorator;
}());
exports.CoffeeDecorator = CoffeeDecorator;
