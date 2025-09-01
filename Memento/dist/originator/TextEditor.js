"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEditor = void 0;
// Originator: The object whose state we want to save and restore
const EditorMemento_1 = require("../memento/EditorMemento");
class TextEditor {
    constructor() {
        this.content = "";
    }
    // Write new content
    write(text) {
        this.content += text;
    }
    // Show current content
    showContent() {
        console.log("Editor Content:", this.content);
    }
    // Save current state into a memento
    save() {
        return new EditorMemento_1.EditorMemento(this.content);
    }
    // Restore state from a memento
    restore(memento) {
        this.content = memento.getContent();
    }
}
exports.TextEditor = TextEditor;
//# sourceMappingURL=TextEditor.js.map