"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FanOnCommand = void 0;
// Concrete Command to turn fan ON
var FanOnCommand = /** @class */ (function () {
    function FanOnCommand(fan) {
        this.fan = fan;
    }
    FanOnCommand.prototype.execute = function () {
        this.fan.on();
    };
    FanOnCommand.prototype.undo = function () {
        this.fan.off();
    };
    return FanOnCommand;
}());
exports.FanOnCommand = FanOnCommand;
