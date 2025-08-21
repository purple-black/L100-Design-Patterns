# Bridge Design Pattern  

## Introduction  
The **Bridge Design Pattern** is a **structural design pattern** that separates an abstraction (high-level logic) from its implementation (low-level details), so they can vary independently.  

In other words, it **decouples shapes (abstraction)** from the **rendering API (implementation)**. This makes the system more flexible and easier to extend without creating a combinatorial explosion of classes.  

---

##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Bridge
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

## Pattern Structure  

- **Abstraction (`Shape`)**  
  Defines the high-level interface for shapes.  

- **Refined Abstraction (`Circle`, `Rectangle`)**  
  Implements the abstraction in different ways.  

- **Implementor (`DrawingAPI`)**  
  Declares the low-level interface for rendering.  

- **Concrete Implementors (`VectorRenderer`, `RasterRenderer`)**  
  Provide specific rendering logic.  

---

## How it Works

- `Shape` (abstract class) → high-level abstraction.  
- `Circle` and `Rectangle` extend `Shape` → refined abstractions.  
- `DrawingAPI` (interface) → defines methods for drawing shapes.  
- `VectorRenderer` and `RasterRenderer` implement `DrawingAPI` → concrete implementations.  
- `main.ts` → client creates shapes and assigns them a rendering strategy (bridge).  

This means we can **mix and match** shapes and rendering methods **without modifying existing classes**.  

---

## Code Without Bridge Pattern

If we don’t use the Bridge Pattern, we would need separate classes for each shape-renderer combination (e.g., VectorCircle, RasterCircle, VectorRectangle, RasterRectangle, etc.).

```ts
class VectorCircle {
    constructor(private x: number, private y: number, private radius: number) {}
    draw() {
        console.log(`VectorRenderer: Drawing circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
    }
}

class RasterCircle {
    constructor(private x: number, private y: number, private radius: number) {}
    draw() {
        console.log(`RasterRenderer: Drawing pixels for circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
    }
}

class VectorRectangle {
    constructor(private x: number, private y: number, private width: number, private height: number) {}
    draw() {
        console.log(`VectorRenderer: Drawing rectangle at (${this.x}, ${this.y}) width=${this.width}, height=${this.height}`);
    }
}

class RasterRectangle {
    constructor(private x: number, private y: number, private width: number, private height: number) {}
    draw() {
        console.log(`RasterRenderer: Drawing pixels for rectangle at (${this.x}, ${this.y}) width=${this.width}, height=${this.height}`);
    }
}

// Client usage
const vc = new VectorCircle(5, 10, 15);
vc.draw();

const rr = new RasterRectangle(20, 30, 40, 25);
rr.draw();
```

## Problems Without Bridge Pattern

- Class Explosion

-- For each shape × renderer combination, a new class is needed.

Example: Circle × {Raster, Vector}, Rectangle × {Raster, Vector}, etc.

Adding a new shape (Triangle) doubles the classes again.

- Rigid Code

-- Adding a new renderer (e.g., OpenGLRenderer) requires modifying or duplicating all shapes.

- Hard to Maintain

-- Small changes in drawing logic force updates in multiple classes.

## Advantages of Bridge Pattern

- Decouples Abstraction from Implementation -> Shapes and renderers evolve independently.
- Scalability -> Adding a new shape doesn’t require changing renderers. Adding a new renderer doesn’t require changing shapes.
- Avoids Class Explosion -> No need for every possible shape-renderer combination.
- Cleaner, More Maintainable Code -> Easy to extend and follow SRP (Single Responsibility Principle).

## Use the Bridge Pattern

- When you have multiple abstractions and multiple implementations that should vary independently.
- When you want to avoid creating many subclasses due to combinations of two dimensions.
- When you want to separate platform-dependent code (like rendering) from platform-independent code (like shapes).
