"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoppedState = void 0;
// Concrete State: Stopped
var StoppedState = /** @class */ (function () {
    function StoppedState(player) {
        this.player = player;
    }
    StoppedState.prototype.play = function () {
        console.log("Starting the music");
        this.player.setState(this.player.getPlayingState());
    };
    StoppedState.prototype.pause = function () {
        console.log("Can't pause, player is stopped");
    };
    StoppedState.prototype.stop = function () {
        console.log("Already stopped");
    };
    return StoppedState;
}());
exports.StoppedState = StoppedState;
