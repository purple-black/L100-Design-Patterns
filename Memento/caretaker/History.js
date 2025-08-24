"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var History = /** @class */ (function () {
    function History() {
        this.mementos = [];
    }
    // Add snapshot
    History.prototype.push = function (memento) {
        this.mementos.push(memento);
    };
    // Undo last snapshot
    History.prototype.pop = function () {
        return this.mementos.pop();
    };
    return History;
}());
exports.History = History;
