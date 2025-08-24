"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MediaPlayer_1 = require("./context/MediaPlayer");
// Client code
var player = new MediaPlayer_1.MediaPlayer();
player.play();
player.pause();
player.play();
player.stop();
player.stop(); // Already stopped
