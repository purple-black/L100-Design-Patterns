// State interface - defines actions for all states
export interface State {
  play(): void;
  pause(): void;
  stop(): void;
}
