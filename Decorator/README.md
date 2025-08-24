# Decorator Design Pattern – Coffee Example

## Introduction
The **Decorator Pattern** is a **structural design pattern** that allows us to dynamically add new behavior or responsibilities to objects **without modifying their code**.  
It achieves this by "wrapping" an object inside another object (the decorator) that adds new functionality.

This pattern is useful when:
- You want to **extend behavior without subclassing**.
- You want to **combine features dynamically at runtime**.
- You want to **avoid creating an explosion of subclasses** for every possible feature combination.

---

##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Decorator
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

## How It Works

1. **Coffee (Component interface)**  
   Defines the base methods `cost()` and `description()`.

2. **PlainCoffee (Concrete Component)**  
   Implements the base behavior (a simple coffee with cost = `10`).

3. **CoffeeDecorator (Abstract Decorator)**  
   Implements the `Coffee` interface and holds a reference to another `Coffee` object.  
   It delegates base behavior to the wrapped object and allows **extensions**.

4. **MilkDecorator / WhippedCreamDecorator (Concrete Decorators)**  
   Extend `CoffeeDecorator` and **add extra cost & description**.  
   - Milk adds `+10` cost and `" + Milk"` description.  
   - Whipped Cream adds `+20` cost and `" + Whipped Cream"` description.  

5. **Client (main.ts)**  
   The client only interacts with the `Coffee` interface.  
   Coffee can be wrapped multiple times dynamically, producing different feature combinations.

---

## Without Decorator Pattern

handle every possible combination of coffee types via subclasses:

```ts
// coffeeWithoutDecorator.ts

// Base class for coffee
class PlainCoffee {
    cost(): number {
        return 10;
    }

    description(): string {
        return "Plain Coffee";
    }
}

// Coffee + Milk
class MilkCoffee extends PlainCoffee {
    cost(): number {
        return super.cost() + 10;
    }

    description(): string {
        return super.description() + " + Milk";
    }
}

// Coffee + Whipped Cream
class WhippedCreamCoffee extends PlainCoffee {
    cost(): number {
        return super.cost() + 20;
    }

    description(): string {
        return super.description() + " + Whipped Cream";
    }
}

// Coffee + Milk + Whipped Cream
class MilkWhippedCreamCoffee extends PlainCoffee {
    cost(): number {
        return super.cost() + 30; // 10 (plain) + 10 (milk) + 20 (whipped cream)
    }

    description(): string {
        return super.description() + " + Milk + Whipped Cream";
    }
}

// Client code
const coffee1 = new MilkWhippedCreamCoffee();
console.log(`Order: ${coffee1.description()}`);
console.log(`Cost: $${coffee1.cost().toFixed(2)}`);

const coffee2 = new MilkCoffee();
console.log(`Order: ${coffee2.description()}`);
console.log(`Cost: $${coffee2.cost().toFixed(2)}`);

const coffee3 = new WhippedCreamCoffee();
console.log(`Order: ${coffee3.description()}`);
console.log(`Cost: $${coffee3.cost().toFixed(2)}`);

```

---

## Problems

- Class explosion  – For every new topping (e.g., Sugar, Chocolate, Vanilla), we need to create many new subclasses for all possible combinations.
- Rigid design – Adding a new feature requires modifying multiple classes.
- Not scalable – Becomes unmanageable as combinations grow.

## Advantages

- Open/Closed Principle – We can add new features without modifying existing code.
- Dynamic behavior – Decorators can be applied at runtime in different combinations.
- Reusability – Individual decorators can be reused in different contexts.
- No subclass explosion – We don’t need dozens of classes for each combination.


