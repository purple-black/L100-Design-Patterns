import { IState } from "./State";
import { MediaPlayer } from "../context/MediaPlayer";

// Concrete State: Paused
export class PausedState implements IState {
  private player: MediaPlayer;

  constructor(player: MediaPlayer) {
    this.player = player;
  }

  play(): void {
    console.log("Resuming the music");
    this.player.setState(this.player.getPlayingState());
  }

  pause(): void {
    console.log("Already paused");
  }

  stop(): void {
    console.log("Stopping the music");
    this.player.setState(this.player.getStoppedState());
  }
}
