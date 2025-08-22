// Observer interface: All observers must implement this
export interface Observer {
  update(news: string): void;  // Called when subject updates
}
