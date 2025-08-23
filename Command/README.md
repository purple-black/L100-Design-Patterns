# Command Design Pattern

## What is the Command Pattern?
The **Command Pattern** is a behavioral design pattern that turns a request into a standalone object.  
This decouples the **Invoker** (the one triggering the action) from the **Receiver** (the one performing the action).

---

## Benefits
- Decouples **sender** and **receiver**.
- Allows easy **undo/redo** functionality.
- Supports **logging** and **queuing** of requests.
- Makes code **extensible** without modifying existing classes.

---

##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd AbstractFactory
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

## Use Case: Smart Home Remote
- Remote Control (**Invoker**) triggers commands.  
- `Light` and `Fan` (**Receivers**) perform the actual work.  
- Each button press corresponds to a **Command object**.

---

## Without the Pattern (Problem)
```ts
// Client directly calls receiver methods
const light = new Light();
light.on();   // Light is ON
light.off();  // Light is OFF
```

## Problems:

- Client is tightly coupled to Light and Fan.
- Hard to add new devices (TV, AC, etc.).

---

## With the Command Pattern

- Loose coupling between remote (Invoker) and devices (Receivers).
- Easy to add new commands without modifying existing code.
