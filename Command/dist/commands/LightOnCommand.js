"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOnCommand = void 0;
// Concrete Command to turn light ON
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
    undo() {
        this.light.off();
    }
}
exports.LightOnCommand = LightOnCommand;
//# sourceMappingURL=LightOnCommand.js.map