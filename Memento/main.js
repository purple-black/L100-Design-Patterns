"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextEditor_1 = require("./originator/TextEditor");
var History_1 = require("./caretaker/History");
var editor = new TextEditor_1.TextEditor();
var history = new History_1.History();
editor.write("Hello, ");
history.push(editor.save()); // Save snapshot
editor.write("world!");
history.push(editor.save()); // Save snapshot
editor.showContent(); // Output: Hello, world!
// Undo last action
var prevState = history.pop();
if (prevState) {
    editor.restore(prevState);
}
editor.showContent(); // Output: Hello, world!
// Undo again
var prevState2 = history.pop();
if (prevState2) {
    editor.restore(prevState2);
}
editor.showContent(); // Output: Hello,
