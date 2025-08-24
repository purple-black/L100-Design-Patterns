// Originator: The object whose state we want to save and restore
import { EditorMemento } from "../memento/EditorMemento";

export class TextEditor {
  private content: string = "";

  // Write new content
  public write(text: string): void {
    this.content += text;
  }

  // Show current content
  public showContent(): void {
    console.log("Editor Content:", this.content);
  }

  // Save current state into a memento
  public save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  // Restore state from a memento
  public restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }
}
