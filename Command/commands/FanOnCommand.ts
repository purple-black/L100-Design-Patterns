import { Command } from "./Command";
import { Fan } from "../receivers/Fan";

// Concrete Command to turn fan ON
export class FanOnCommand implements Command {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.on();
  }

  undo(): void {
    this.fan.off();
  }
}
