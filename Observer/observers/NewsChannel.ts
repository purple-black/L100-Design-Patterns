// Concrete Observer: Implements reaction to subject updates
import { Observer } from "./Observer";

export class NewsChannel implements Observer {
  private channelName: string;

  constructor(name: string) {
    this.channelName = name;
  }

  update(news: string): void {
    console.log(`${this.channelName} received news: ${news}`);
  }
}
