"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Light_1 = require("./receivers/Light");
var Fan_1 = require("./receivers/Fan");
var LightOnCommand_1 = require("./commands/LightOnCommand");
var LightOffCommand_1 = require("./commands/LightOffCommand");
var FanOnCommand_1 = require("./commands/FanOnCommand");
var FanOffCommand_1 = require("./commands/FanOffCommand");
var RemoteControl_1 = require("./invoker/RemoteControl");
// Create receivers
var livingRoomLight = new Light_1.Light();
var ceilingFan = new Fan_1.Fan();
// Create commands
var lightOn = new LightOnCommand_1.LightOnCommand(livingRoomLight);
var lightOff = new LightOffCommand_1.LightOffCommand(livingRoomLight);
var fanOn = new FanOnCommand_1.FanOnCommand(ceilingFan);
var fanOff = new FanOffCommand_1.FanOffCommand(ceilingFan);
// Create invoker
var remote = new RemoteControl_1.RemoteControl();
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
