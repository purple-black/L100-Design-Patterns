import { IState } from "./State";
import { MediaPlayer } from "../context/MediaPlayer";

// Concrete State: Stopped
export class StoppedState implements IState {
  private player: MediaPlayer;

  constructor(player: MediaPlayer) {
    this.player = player;
  }

  play(): void {
    console.log("Starting the music");
    this.player.setState(this.player.getPlayingState());
  }

  pause(): void {
    console.log("Can't pause, player is stopped");
  }

  stop(): void {
    console.log("Already stopped");
  }
}
