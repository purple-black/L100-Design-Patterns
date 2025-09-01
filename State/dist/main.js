"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MediaPlayer_1 = require("./context/MediaPlayer");
// Client code
const player = new MediaPlayer_1.MediaPlayer();
player.play();
player.pause();
player.play();
player.stop();
player.stop(); // Already stopped
//# sourceMappingURL=main.js.map