"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEditor = void 0;
// Originator: The object whose state we want to save and restore
var EditorMemento_1 = require("../memento/EditorMemento");
var TextEditor = /** @class */ (function () {
    function TextEditor() {
        this.content = "";
    }
    // Write new content
    TextEditor.prototype.write = function (text) {
        this.content += text;
    };
    // Show current content
    TextEditor.prototype.showContent = function () {
        console.log("Editor Content:", this.content);
    };
    // Save current state into a memento
    TextEditor.prototype.save = function () {
        return new EditorMemento_1.EditorMemento(this.content);
    };
    // Restore state from a memento
    TextEditor.prototype.restore = function (memento) {
        this.content = memento.getContent();
    };
    return TextEditor;
}());
exports.TextEditor = TextEditor;
