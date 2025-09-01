"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPlayer = void 0;
const PlayingState_1 = require("../states/PlayingState");
const PausedState_1 = require("../states/PausedState");
const StoppedState_1 = require("../states/StoppedState");
// Context class - maintains current state
class MediaPlayer {
    constructor() {
        this.playingState = new PlayingState_1.PlayingState(this);
        this.pausedState = new PausedState_1.PausedState(this);
        this.stoppedState = new StoppedState_1.StoppedState(this);
        // initial state is stopped
        this.currentState = this.stoppedState;
    }
    // action methods delegated to current state
    play() {
        this.currentState.play();
    }
    pause() {
        this.currentState.pause();
    }
    stop() {
        this.currentState.stop();
    }
    // State management
    setState(state) {
        this.currentState = state;
    }
    getPlayingState() {
        return this.playingState;
    }
    getPausedState() {
        return this.pausedState;
    }
    getStoppedState() {
        return this.stoppedState;
    }
}
exports.MediaPlayer = MediaPlayer;
//# sourceMappingURL=MediaPlayer.js.map