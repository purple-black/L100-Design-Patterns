// Concrete Observer: Implements reaction to subject updates
import { IObserver } from "./Observer";

export class NewsChannel implements IObserver {
  private channelName: string;

  constructor(name: string) {
    this.channelName = name;
  }

  update(news: string): void {
    console.log(`${this.channelName} received news: ${news}`);
  }
}
