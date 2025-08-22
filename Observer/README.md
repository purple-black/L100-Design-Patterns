# Observer Design Pattern

##  Introduction
The **Observer Pattern** is a **behavioral design pattern** where an object (called the **Subject**) keeps track of its dependents (**Observers**) and automatically notifies them of state changes.  

This pattern is widely used in **event-driven systems, GUIs, and publish/subscribe mechanisms**.

---
##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Observer
```

Install TypeScript:

```
npm install -g typescript
```

Open terminal and enter:
Compile TypeScript and then run the compiled javascript file

```
tsc main.ts
node main.js
```
---

## Use Case: News Agency
- A **NewsAgency (Subject)** publishes news.
- **NewsChannels (Observers)** subscribe to the agency.
- Whenever news is updated, all subscribed channels get notified automatically.

---

## With Observer Pattern
- Loose coupling between publisher and subscribers.
- Channels can **subscribe/unsubscribe dynamically**.
- Follows **Open/Closed Principle**.

---

## Without Observer Pattern
```ts
class NewsAgencyWithoutPattern {
  private news: string = "";

  setNews(news: string, channels: string[]): void {
    this.news = news;
    for (const channel of channels) {
      console.log(`${channel} received news: ${news}`);
    }
  }
}

const agency = new NewsAgencyWithoutPattern();
agency.setNews("Breaking News!", ["CNN", "BBC", "Al Jazeera"]);

```

---

## Problems

- Agency tightly coupled with channels.
- Cannot unsubscribe channels dynamically.
- Adding new channels requires modifying subject code.
- Violates Open/Closed Principle.

## Adavntages of observer pattern

- Loose coupling.
- Scalable and extensible.
- Clean and maintainable code.
- Dynamic subscriptions.
