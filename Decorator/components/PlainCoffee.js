"use strict";
// Concrete Component
// This is the base object that is decorated.
// It implements the Coffee interface directly.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlainCoffee = void 0;
var PlainCoffee = /** @class */ (function () {
    function PlainCoffee() {
    }
    PlainCoffee.prototype.cost = function () {
        return 10;
    };
    PlainCoffee.prototype.description = function () {
        return "Plain Coffee";
    };
    return PlainCoffee;
}());
exports.PlainCoffee = PlainCoffee;
