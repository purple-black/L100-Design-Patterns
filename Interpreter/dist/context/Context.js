"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
// Context class: holds information required by the interpreter
class Context {
    constructor() {
        this.data = new Map();
    }
    setVariable(name, value) {
        this.data.set(name, value);
    }
    getVariable(name) {
        if (!this.data.has(name)) {
            throw new Error(`Variable ${name} not found`);
        }
        return this.data.get(name);
    }
}
exports.Context = Context;
