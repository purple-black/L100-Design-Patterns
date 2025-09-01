"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Light_1 = require("./receivers/Light");
const Fan_1 = require("./receivers/Fan");
const LightOnCommand_1 = require("./commands/LightOnCommand");
const LightOffCommand_1 = require("./commands/LightOffCommand");
const FanOnCommand_1 = require("./commands/FanOnCommand");
const FanOffCommand_1 = require("./commands/FanOffCommand");
const RemoteControl_1 = require("./invoker/RemoteControl");
// Create receivers
const livingRoomLight = new Light_1.Light();
const ceilingFan = new Fan_1.Fan();
// Create commands
const lightOn = new LightOnCommand_1.LightOnCommand(livingRoomLight);
const lightOff = new LightOffCommand_1.LightOffCommand(livingRoomLight);
const fanOn = new FanOnCommand_1.FanOnCommand(ceilingFan);
const fanOff = new FanOffCommand_1.FanOffCommand(ceilingFan);
// Create invoker
const remote = new RemoteControl_1.RemoteControl();
// Assign commands to remote slots
remote.setCommand(0, lightOn);
remote.setCommand(1, lightOff);
remote.setCommand(2, fanOn);
remote.setCommand(3, fanOff);
// Simulate button presses
remote.pressButton(0); // Light ON
remote.pressButton(1); // Light OFF
remote.pressUndo(); // Undo last (turn Light ON again)
remote.pressButton(2); // Fan ON
remote.pressButton(3); // Fan OFF
remote.pressUndo(); // Undo last (Fan ON again)
//# sourceMappingURL=main.js.map