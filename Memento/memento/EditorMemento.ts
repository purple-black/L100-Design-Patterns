// Memento: Stores the internal state of the originator
export class EditorMemento {
  constructor(private content: string) {}

  // Only Originator can access this state
  public getContent(): string {
    return this.content;
  }
}
