"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayingState = void 0;
// Concrete State: Playing
var PlayingState = /** @class */ (function () {
    function PlayingState(player) {
        this.player = player;
    }
    PlayingState.prototype.play = function () {
        console.log("Already playing");
    };
    PlayingState.prototype.pause = function () {
        console.log("Pausing the music");
        this.player.setState(this.player.getPausedState());
    };
    PlayingState.prototype.stop = function () {
        console.log("Stopping the music");
        this.player.setState(this.player.getStoppedState());
    };
    return PlayingState;
}());
exports.PlayingState = PlayingState;
