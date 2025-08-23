"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FanOffCommand = void 0;
// Concrete Command to turn fan OFF
var FanOffCommand = /** @class */ (function () {
    function FanOffCommand(fan) {
        this.fan = fan;
    }
    FanOffCommand.prototype.execute = function () {
        this.fan.off();
    };
    FanOffCommand.prototype.undo = function () {
        this.fan.on();
    };
    return FanOffCommand;
}());
exports.FanOffCommand = FanOffCommand;
