// Observer interface: All observers must implement this
export interface IObserver {
  update(news: string): void;  // Called when subject updates
}
