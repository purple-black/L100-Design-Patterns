// Caretaker: Manages the history of mementos
import { EditorMemento } from "../memento/EditorMemento";

export class History {
  private mementos: EditorMemento[] = [];

  // Add snapshot
  public push(memento: EditorMemento): void {
    this.mementos.push(memento);
  }

  // Undo last snapshot
  public pop(): EditorMemento | undefined {
    return this.mementos.pop();
  }
}
