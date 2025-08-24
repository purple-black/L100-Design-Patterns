# Visitor Design Pattern

## Introduction
The **Visitor Design Pattern** is a **behavioral pattern** that allows adding new operations to existing class hierarchies **without modifying the classes themselves**.

- Each element implements an `accept(visitor)` method.
- The visitor defines different operations for each element type.
- New operations = add new visitors, without touching existing element code.

---
##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Visitor
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

## Use Case: Document Editor
We have a document with different elements:
- `Text`
- `Image`
- `Table`

We want to:
- Render them on screen
- Export them to HTML

Instead of modifying each element class for every new operation → we create **Visitors** for rendering, exporting, etc.

---

##  With Visitor Pattern
- `Element` classes only hold data and `accept(visitor)`.
- `Visitor` classes contain the logic for operations.
- Adding new behavior is as simple as creating a new visitor.

Example:
```ts
const renderVisitor = new RenderVisitor();
doc.forEach(el => el.accept(renderVisitor)); // Render

const exportVisitor = new ExportVisitor();
doc.forEach(el => el.accept(exportVisitor)); // Export
```
---

## Without Visitor Pattern

```ts
class Text {
  constructor(public content: string) {}

  render() { console.log("Rendering:", this.content); }
  export() { console.log(`<p>${this.content}</p>`); }
}

class ImageElement {
  constructor(public filename: string) {}

  render() { console.log("Rendering:", this.filename); }
  export() { console.log(`<img src="${this.filename}" />`); }
}
```
---

## Problems

- Class explosion of methods – Each class keeps growing with unrelated operations (render, export, print, analyze...).
- Hard to extend – Adding a new operation requires modifying all classes.
- Violates Single Responsibility Principle – Data and behavior get mixed.

---

## Advantages of Visitor Pattern

- Easy to add new operations → just create a new visitor.
- Keeps element classes clean and focused on data.
- Encourages Open/Closed Principle (open for extension, closed for modification).
