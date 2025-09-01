"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
// Invoker - RemoteControl
class RemoteControl {
    constructor() {
        this.commandSlots = [];
        this.lastCommand = null;
    }
    setCommand(slot, command) {
        this.commandSlots[slot] = command;
    }
    pressButton(slot) {
        if (this.commandSlots[slot]) {
            this.commandSlots[slot].execute();
            this.lastCommand = this.commandSlots[slot];
        }
        else {
            console.log("No command assigned to this button.");
        }
    }
    pressUndo() {
        if (this.lastCommand) {
            console.log("Undoing last command...");
            this.lastCommand.undo();
            this.lastCommand = null;
        }
        else {
            console.log("No command to undo.");
        }
    }
}
exports.RemoteControl = RemoteControl;
//# sourceMappingURL=RemoteControl.js.map