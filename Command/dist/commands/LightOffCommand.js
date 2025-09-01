"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOffCommand = void 0;
// Concrete Command to turn light OFF
class LightOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.off();
    }
    undo() {
        this.light.on();
    }
}
exports.LightOffCommand = LightOffCommand;
//# sourceMappingURL=LightOffCommand.js.map