"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PausedState = void 0;
// Concrete State: Paused
var PausedState = /** @class */ (function () {
    function PausedState(player) {
        this.player = player;
    }
    PausedState.prototype.play = function () {
        console.log("Resuming the music");
        this.player.setState(this.player.getPlayingState());
    };
    PausedState.prototype.pause = function () {
        console.log("Already paused");
    };
    PausedState.prototype.stop = function () {
        console.log("Stopping the music");
        this.player.setState(this.player.getStoppedState());
    };
    return PausedState;
}());
exports.PausedState = PausedState;
