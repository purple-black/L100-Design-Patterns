"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextEditor_1 = require("./originator/TextEditor");
const History_1 = require("./caretaker/History");
const editor = new TextEditor_1.TextEditor();
const history = new History_1.History();
editor.write("Hello, ");
history.push(editor.save()); // Save snapshot
editor.write("world!");
history.push(editor.save()); // Save snapshot
editor.showContent(); // Output: Hello, world!
// Undo last action
const prevState = history.pop();
if (prevState) {
    editor.restore(prevState);
}
editor.showContent(); // Output: Hello, world!
// Undo again
const prevState2 = history.pop();
if (prevState2) {
    editor.restore(prevState2);
}
editor.showContent(); // Output: Hello,
//# sourceMappingURL=main.js.map