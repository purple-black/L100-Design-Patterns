"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsAgency = void 0;
class NewsAgency {
    constructor() {
        this.observers = [];
        this.news = "";
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    setNews(news) {
        this.news = news;
        this.notify(); // Notify all observers when state changes
    }
    getNews() {
        return this.news;
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this.news);
        }
    }
}
exports.NewsAgency = NewsAgency;
//# sourceMappingURL=NewsAgency.js.map