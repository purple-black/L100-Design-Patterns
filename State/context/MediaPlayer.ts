import { IState } from "../states/State";
import { PlayingState } from "../states/PlayingState";
import { PausedState } from "../states/PausedState";
import { StoppedState } from "../states/StoppedState";

// Context class - maintains current state
export class MediaPlayer {
  private playingState: IState;
  private pausedState: IState;
  private stoppedState: IState;

  private currentState: IState;

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
  public setState(state: IState): void {
    this.currentState = state;
  }

  public getPlayingState(): IState {
    return this.playingState;
  }

  public getPausedState(): IState {
    return this.pausedState;
  }

  public getStoppedState(): IState {
    return this.stoppedState;
  }
}
