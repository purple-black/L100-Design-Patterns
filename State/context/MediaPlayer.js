"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPlayer = void 0;
var PlayingState_1 = require("../states/PlayingState");
var PausedState_1 = require("../states/PausedState");
var StoppedState_1 = require("../states/StoppedState");
// Context class - maintains current state
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer() {
        this.playingState = new PlayingState_1.PlayingState(this);
        this.pausedState = new PausedState_1.PausedState(this);
        this.stoppedState = new StoppedState_1.StoppedState(this);
        // initial state is stopped
        this.currentState = this.stoppedState;
    }
    // action methods delegated to current state
    MediaPlayer.prototype.play = function () {
        this.currentState.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.currentState.pause();
    };
    MediaPlayer.prototype.stop = function () {
        this.currentState.stop();
    };
    // State management
    MediaPlayer.prototype.setState = function (state) {
        this.currentState = state;
    };
    MediaPlayer.prototype.getPlayingState = function () {
        return this.playingState;
    };
    MediaPlayer.prototype.getPausedState = function () {
        return this.pausedState;
    };
    MediaPlayer.prototype.getStoppedState = function () {
        return this.stoppedState;
    };
    return MediaPlayer;
}());
exports.MediaPlayer = MediaPlayer;
