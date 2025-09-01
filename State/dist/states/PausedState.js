"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PausedState = void 0;
// Concrete State: Paused
class PausedState {
    constructor(player) {
        this.player = player;
    }
    play() {
        console.log("Resuming the music");
        this.player.setState(this.player.getPlayingState());
    }
    pause() {
        console.log("Already paused");
    }
    stop() {
        console.log("Stopping the music");
        this.player.setState(this.player.getStoppedState());
    }
}
exports.PausedState = PausedState;
//# sourceMappingURL=PausedState.js.map