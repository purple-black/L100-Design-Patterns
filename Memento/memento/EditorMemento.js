"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorMemento = void 0;
// Memento: Stores the internal state of the originator
var EditorMemento = /** @class */ (function () {
    function EditorMemento(content) {
        this.content = content;
    }
    // Only Originator can access this state
    EditorMemento.prototype.getContent = function () {
        return this.content;
    };
    return EditorMemento;
}());
exports.EditorMemento = EditorMemento;
