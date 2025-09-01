"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FanOnCommand = void 0;
// Concrete Command to turn fan ON
class FanOnCommand {
    constructor(fan) {
        this.fan = fan;
    }
    execute() {
        this.fan.on();
    }
    undo() {
        this.fan.off();
    }
}
exports.FanOnCommand = FanOnCommand;
//# sourceMappingURL=FanOnCommand.js.map