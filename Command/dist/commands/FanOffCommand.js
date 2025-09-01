"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FanOffCommand = void 0;
// Concrete Command to turn fan OFF
class FanOffCommand {
    constructor(fan) {
        this.fan = fan;
    }
    execute() {
        this.fan.off();
    }
    undo() {
        this.fan.on();
    }
}
exports.FanOffCommand = FanOffCommand;
//# sourceMappingURL=FanOffCommand.js.map