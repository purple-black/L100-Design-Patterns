import { State } from "../states/State";
import { PlayingState } from "../states/PlayingState";
import { PausedState } from "../states/PausedState";
import { StoppedState } from "../states/StoppedState";

// Context class - maintains current state
export class MediaPlayer {
  private playingState: State;
  private pausedState: State;
  private stoppedState: State;

  private currentState: State;

  constructor() {
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.stoppedState = new StoppedState(this);

    // initial state is stopped
    this.currentState = this.stoppedState;
  }

  // action methods delegated to current state
  public play(): void {
    this.currentState.play();
  }

  public pause(): void {
    this.currentState.pause();
  }

  public stop(): void {
    this.currentState.stop();
  }

  // State management
  public setState(state: State): void {
    this.currentState = state;
  }

  public getPlayingState(): State {
    return this.playingState;
  }

  public getPausedState(): State {
    return this.pausedState;
  }

  public getStoppedState(): State {
    return this.stoppedState;
  }
}
