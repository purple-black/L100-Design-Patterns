import { ICommand } from "./Command";
import { Light } from "../receivers/Light";

// Concrete Command to turn light OFF
export class LightOffCommand implements ICommand {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
