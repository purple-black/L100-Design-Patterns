# Flyweight Design Pattern

## Introduction
The **Flyweight Design Pattern** is a **structural design pattern** used to minimize memory usage and improve performance when creating a large number of similar objects.  

It works by sharing as much state as possible between objects, instead of duplicating it.  
- **Intrinsic state** → Shared, immutable data (e.g., tree type, color, texture).  
- **Extrinsic state** → Unique, contextual data (e.g., tree position).  

This is especially useful in systems where we need **thousands/millions of objects** (like trees in a forest, characters in a text editor, or particles in a simulation).

---

## Flyweight Pattern

### Structure
- **`TreeType` (Flyweight)** → Stores shared intrinsic state (`name`, `color`, `texture`).
- **`Tree` (Context)** → Stores extrinsic state (`x`, `y`) and references a `TreeType`.
- **`TreeFactory` (Flyweight Factory)** → Ensures shared `TreeType` objects are reused instead of creating duplicates.
- **`Forest` (Client)** → Uses `TreeFactory` to plant trees and stores them.

### How to Run

Clone the repo: <br><br>

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Mediator
```
<br><br>
Install TypeScript: <br><br>

```
npm install -g typescript
```
<br><br>
Open terminal and enter:<br>
Compile TypeScript and then run the compiled javascript file<br><br>

```bash
tsc main.ts --target ES2015 --lib ES2015,DOM
node dist/main.js
```

---

## Code Without Flyweight Pattern

```ts
// Without Flyweight → Tree objects carry duplicate state
class TreeWithoutFlyweight {
    constructor(
        private x: number,
        private y: number,
        private name: string,
        private color: string,
        private texture: string
    ) {}

    public draw(): void {
        console.log(
            `Drawing tree of type ${this.name} at (${this.x}, ${this.y}) with color ${this.color} and texture ${this.texture}`
        );
    }
}

class ForestWithoutFlyweight {
    private trees: TreeWithoutFlyweight[] = [];

    public plantTree(x: number, y: number, name: string, color: string, texture: string): void {
        const tree = new TreeWithoutFlyweight(x, y, name, color, texture);
        this.trees.push(tree);
    }

    public draw(): void {
        for (const tree of this.trees) {
            tree.draw();
        }
    }

    public treeCount(): number {
        return this.trees.length;
    }
}

// Demo
const forest = new ForestWithoutFlyweight();

for (let i = 0; i < 5000; i++) {
    forest.plantTree(Math.random() * 1000, Math.random() * 1000, "Pine", "Green", "Rough");
    forest.plantTree(Math.random() * 1000, Math.random() * 1000, "Oak", "Dark Green", "Smooth");
}

forest.draw();
console.log(`Total tree objects created: ${forest.treeCount()}`);
```

---

## Problem without flyweight

- Memory Waste: Every tree stores duplicate data (name, color, texture), even if 5,000 trees are identical.
- Slow Performance: Extra memory allocation and garbage collection overhead.
- Scalability Issues: Creating millions of trees may crash due to memory exhaustion.
- Hard to Manage: Repeated data increases risk of inconsistencies.

---

## Advantages of Flyweight

- Reduced Memory Usage – Shared objects (TreeType) avoid duplication.
- Performance Boost – Less memory means faster execution and garbage collection.
- Better Scalability – Can handle millions of objects efficiently.
- Clean Separation – Splits intrinsic (shared) and extrinsic (unique) state, improving code clarity.

---

## Use Flyweight 

- When your application creates a very large number of similar objects.
- When objects share common properties that can be factored out.
- When memory usage becomes a bottleneck.
