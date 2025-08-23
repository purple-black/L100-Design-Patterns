import { Command } from "./Command";
import { Light } from "../receivers/Light";

// Concrete Command to turn light ON
export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
