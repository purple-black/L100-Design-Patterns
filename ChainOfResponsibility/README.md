# Chain of Responsibility Design Pattern

## Introduction
The **Chain of Responsibility (CoR)** is a **behavioral design pattern** that allows a request to be passed along a chain of handlers. Each handler decides:
- To process the request
- Or to pass it to the next handler

This way, the **sender of the request does not need to know which handler will process it.**

---
##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd ChainOfResponsibility
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

## Use case: Customer Support System

Implemented a **support ticket escalation system**:
- **Level 1 Support** → Handles basic issues
- **Level 2 Support** → Handles intermediate issues
- **Level 3 Support** → Handles critical issues

If one level cannot handle the issue, it **escalates** to the next.

---

## Without the Pattern

```ts
function handleRequest(level: number): void {
  if (level === 1) {
    console.log("Level 1 Support: Handling basic issue.");
  } else if (level === 2) {
    console.log("Level 2 Support: Handling intermediate issue.");
  } else if (level === 3) {
    console.log("Level 3 Support: Handling critical issue.");
  } else {
    console.log("No support available for this level.");
  }
}

// Client must always call this function
handleRequest(2);
```
---
## Problems without the pattern

- Tight coupling: All logic lives inside one function/class.
- No flexibility: Adding a new support level requires changing the main logic.
- Not extensible: Cannot easily reorder or remove handlers.
- Single point of modification: Code becomes messy as the request handling grows.

---

## Advantages of CoR pattern

- Loose coupling between sender and receiver
- Handlers can be added, removed, or reordered easily
- Open/Closed Principle: new handlers can be added without modifying existing ones
- Reusable and cleaner design

