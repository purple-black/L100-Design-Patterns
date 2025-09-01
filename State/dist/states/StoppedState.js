"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoppedState = void 0;
// Concrete State: Stopped
class StoppedState {
    constructor(player) {
        this.player = player;
    }
    play() {
        console.log("Starting the music");
        this.player.setState(this.player.getPlayingState());
    }
    pause() {
        console.log("Can't pause, player is stopped");
    }
    stop() {
        console.log("Already stopped");
    }
}
exports.StoppedState = StoppedState;
//# sourceMappingURL=StoppedState.js.map