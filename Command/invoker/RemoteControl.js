"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
// Invoker - RemoteControl
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.commandSlots = [];
        this.lastCommand = null;
    }
    RemoteControl.prototype.setCommand = function (slot, command) {
        this.commandSlots[slot] = command;
    };
    RemoteControl.prototype.pressButton = function (slot) {
        if (this.commandSlots[slot]) {
            this.commandSlots[slot].execute();
            this.lastCommand = this.commandSlots[slot];
        }
        else {
            console.log("No command assigned to this button.");
        }
    };
    RemoteControl.prototype.pressUndo = function () {
        if (this.lastCommand) {
            console.log("Undoing last command...");
            this.lastCommand.undo();
            this.lastCommand = null;
        }
        else {
            console.log("No command to undo.");
        }
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
