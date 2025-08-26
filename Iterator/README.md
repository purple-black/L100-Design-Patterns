# Iterator Design Pattern

## Introduction
The **Iterator Design Pattern** provides a way to **access elements of a collection sequentially without exposing its internal structure**.  
It decouples the client from knowing **how the collection is stored (array, list, linked list, tree, etc.)**.

---
##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Iterator
```

Install TypeScript:

```
npm install -g typescript
```

Open terminal and enter:
Compile TypeScript and then run the compiled javascript file

```
tsc
node dist/main.js
```
---

## How it works

- Iterator (Iterator.ts) → Interface with hasNext(), next().
- Concrete Iterator (BookIterator.ts) → Implements traversal logic.
- Aggregate (Aggregate.ts) → Interface for collections that return iterators.
- Concrete Aggregate (Library.ts) → Stores books, returns a BookIterator.
- Client (main.ts) → Uses the iterator to traverse without knowing internals.

## Without Iterator pattern

** Without iterator **
```ts
const books: Book[] = [];
books.push(new Book("Harry Potter", "J K Rowling"));
books.push(new Book("Davinci Code", "Dan Brown"));

for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
}
```
---

## Problem Without Iterator
Without the iterator pattern:
- The client directly accesses the internal collection (e.g., an array).
- If the underlying structure changes (e.g., from array → linked list), the client code must change.
- Traversal logic is repeated everywhere instead of being encapsulated.

## Advantages

- Hides internal representation of collections.
- Provides a uniform way to traverse different collections.
- Makes collections interchangeable (array, list, tree, etc.).
- Encapsulates traversal logic in a single place.
