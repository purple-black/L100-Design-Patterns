// State interface - defines actions for all states
export interface IState {
  play(): void;
  pause(): void;
  stop(): void;
}
