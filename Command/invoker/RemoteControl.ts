import { ICommand } from "../commands/Command";

// Invoker - RemoteControl
export class RemoteControl {
  private commandSlots: ICommand[] = [];
  private lastCommand: ICommand | null = null;

  setCommand(slot: number, command: ICommand): void {
    this.commandSlots[slot] = command;
  }

  pressButton(slot: number): void {
    if (this.commandSlots[slot]) {
      this.commandSlots[slot].execute();
      this.lastCommand = this.commandSlots[slot];
    } else {
      console.log("No command assigned to this button.");
    }
  }

  pressUndo(): void {
    if (this.lastCommand) {
      console.log("Undoing last command...");
      this.lastCommand.undo();
      this.lastCommand = null;
    } else {
      console.log("No command to undo.");
    }
  }
}
