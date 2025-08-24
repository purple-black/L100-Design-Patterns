import { MediaPlayer } from "./context/MediaPlayer";

// Client code
const player = new MediaPlayer();

player.play();
player.pause();
player.play();
player.stop();
player.stop();   // Already stopped
