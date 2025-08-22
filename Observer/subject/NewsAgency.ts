// Concrete Subject: Maintains news state and notifies observers
import { Subject } from "./Subject";
import { Observer } from "../observers/Observer";

export class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private news: string = "";

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  setNews(news: string): void {
    this.news = news;
    this.notify(); // Notify all observers when state changes
  }

  getNews(): string {
    return this.news;
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }
}
