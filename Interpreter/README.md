# Interpreter Design Pattern

## Introduction
The **Interpreter Design Pattern** defines a grammar for a simple language and provides an interpreter to evaluate sentences in that language.

- It is a **behavioral pattern**.
- Useful for **Domain Specific Languages (DSLs)**, **parsers**, or **formula evaluation**.
- Defines **Abstract Expression**, **Terminal Expressions**, and **Non-Terminal Expressions**.

---
##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Interpreter
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

## Use case: Arithmetic Expression Interpreter
We implemented a small interpreter to evaluate arithmetic expressions like:

(2 + 3) - 1


- **NumberExpression** → returns a number.  
- **AddExpression** → adds two expressions.  
- **SubtractExpression** → subtracts two expressions.  
- **Context** → provides external data (like variables).  

---


---

## How it works
1. Each expression implements `interpret()`.  
2. The client builds an **expression tree** (`(2 + 3) - 1`).  
3. Calling `interpret(context)` evaluates the whole tree recursively.

- AbstractExpression → AbstractExpression.ts

Defines interpret(context) for all grammar rules.

- TerminalExpression → NumberExpression.ts

Implements numbers (final values, no further interpretation).

- NonTerminalExpression → AddExpression.ts, SubtractExpression.ts

Define grammar rules that combine expressions.

- Context → Context.ts

Provides external data (like variable values).

- Client → main.ts

Builds an expression tree and calls interpret() on it.

---

## Without the Pattern
If we don’t use Interpreter Pattern:
```ts
function evaluate(expr: string): number {
  if (expr === "2 + 3 - 1") return 4;
  // string parsing logic here...
  return 0;
}
```

---

## Problems

- Hard to extend (adding multiplication, division requires rewriting parsing logic).
- Code becomes messy with if/else or switch statements.
- No clear separation between grammar and evaluation.

## Advantages of the Interpreter Pattern

- Easy to extend grammar (just add a new Expression class).
- Clear separation of concerns (each rule has its own class).
- Expression evaluation is recursive and modular.



