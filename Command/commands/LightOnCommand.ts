import { ICommand } from "./Command";
import { Light } from "../receivers/Light";

// Concrete Command to turn light ON
export class LightOnCommand implements ICommand {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
