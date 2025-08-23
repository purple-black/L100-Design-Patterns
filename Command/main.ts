import { Light } from "./receivers/Light";
import { Fan } from "./receivers/Fan";
import { LightOnCommand } from "./commands/LightOnCommand";
import { LightOffCommand } from "./commands/LightOffCommand";
import { FanOnCommand } from "./commands/FanOnCommand";
import { FanOffCommand } from "./commands/FanOffCommand";
import { RemoteControl } from "./invoker/RemoteControl";

// Create receivers
const livingRoomLight = new Light();
const ceilingFan = new Fan();

// Create commands
const lightOn = new LightOnCommand(livingRoomLight);
const lightOff = new LightOffCommand(livingRoomLight);
const fanOn = new FanOnCommand(ceilingFan);
const fanOff = new FanOffCommand(ceilingFan);

// Create invoker
const remote = new RemoteControl();

// Assign commands to remote slots
remote.setCommand(0, lightOn);
remote.setCommand(1, lightOff);
remote.setCommand(2, fanOn);
remote.setCommand(3, fanOff);

// Simulate button presses
remote.pressButton(0); // Light ON
remote.pressButton(1); // Light OFF
remote.pressUndo();    // Undo last (turn Light ON again)

remote.pressButton(2); // Fan ON
remote.pressButton(3); // Fan OFF
remote.pressUndo();    // Undo last (Fan ON again)
