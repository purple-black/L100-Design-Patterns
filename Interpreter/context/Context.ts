// Context class: holds information required by the interpreter
export class Context {
  private data: Map<string, number> = new Map();

  setVariable(name: string, value: number): void {
    this.data.set(name, value);
  }

  getVariable(name: string): number {
    if (!this.data.has(name)) {
      throw new Error(`Variable ${name} not found`);
    }
    return this.data.get(name)!;
  }
}
