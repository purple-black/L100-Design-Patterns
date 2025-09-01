"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayingState = void 0;
// Concrete State: Playing
class PlayingState {
    constructor(player) {
        this.player = player;
    }
    play() {
        console.log("Already playing");
    }
    pause() {
        console.log("Pausing the music");
        this.player.setState(this.player.getPausedState());
    }
    stop() {
        console.log("Stopping the music");
        this.player.setState(this.player.getStoppedState());
    }
}
exports.PlayingState = PlayingState;
//# sourceMappingURL=PlayingState.js.map