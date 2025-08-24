import { State } from "./State";
import { MediaPlayer } from "../context/MediaPlayer";

// Concrete State: Playing
export class PlayingState implements State {
  private player: MediaPlayer;

  constructor(player: MediaPlayer) {
    this.player = player;
  }

  play(): void {
    console.log("Already playing");
  }

  pause(): void {
    console.log("Pausing the music");
    this.player.setState(this.player.getPausedState());
  }

  stop(): void {
    console.log("Stopping the music");
    this.player.setState(this.player.getStoppedState());
  }
}
