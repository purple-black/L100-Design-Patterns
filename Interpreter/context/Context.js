"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
// Context class: holds information required by the interpreter
var Context = /** @class */ (function () {
    function Context() {
        this.data = new Map();
    }
    Context.prototype.setVariable = function (name, value) {
        this.data.set(name, value);
    };
    Context.prototype.getVariable = function (name) {
        if (!this.data.has(name)) {
            throw new Error("Variable ".concat(name, " not found"));
        }
        return this.data.get(name);
    };
    return Context;
}());
exports.Context = Context;
