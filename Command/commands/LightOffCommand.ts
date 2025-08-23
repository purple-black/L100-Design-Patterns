import { Command } from "./Command";
import { Light } from "../receivers/Light";

// Concrete Command to turn light OFF
export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
