import { Command } from "./Command";
import { Fan } from "../receivers/Fan";

// Concrete Command to turn fan OFF
export class FanOffCommand implements Command {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.off();
  }

  undo(): void {
    this.fan.on();
  }
}
