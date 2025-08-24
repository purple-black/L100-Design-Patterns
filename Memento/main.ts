import { TextEditor } from "./originator/TextEditor";
import { History } from "./caretaker/History";

const editor = new TextEditor();
const history = new History();

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
