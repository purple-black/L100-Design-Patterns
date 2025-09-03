// Concrete Subject: Maintains news state and notifies observers
import { ISubject } from "./Subject";
import { IObserver } from "../observers/Observer";

export class NewsAgency implements ISubject {
  private observers: IObserver[] = [];
  private news: string = "";

  attach(observer: IObserver): void {
    this.observers.push(observer);
  }

  detach(observer: IObserver): void {
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
