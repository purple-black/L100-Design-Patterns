// Command interface - all commands must implement this
export interface ICommand {
  execute(): void;
  undo(): void;  // optional but useful for undo functionality
}
