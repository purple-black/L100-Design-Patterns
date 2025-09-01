"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
class History {
    constructor() {
        this.mementos = [];
    }
    // Add snapshot
    push(memento) {
        this.mementos.push(memento);
    }
    // Undo last snapshot
    pop() {
        return this.mementos.pop();
    }
}
exports.History = History;
//# sourceMappingURL=History.js.map