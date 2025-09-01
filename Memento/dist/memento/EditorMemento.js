"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorMemento = void 0;
// Memento: Stores the internal state of the originator
class EditorMemento {
    constructor(content) {
        this.content = content;
    }
    // Only Originator can access this state
    getContent() {
        return this.content;
    }
}
exports.EditorMemento = EditorMemento;
//# sourceMappingURL=EditorMemento.js.map