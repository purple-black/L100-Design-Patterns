# Adapter Design Pattern

## Introduction
The **Adapter Design Pattern** is a **structural design pattern** that allows two incompatible interfaces to work together.  
It acts as a **bridge** between the **client code** (which expects a certain interface) and an **existing class** (which has a different interface).

In simple terms:
- **Client** → expects a standard interface (`PaymentProcessor`).
- **Adaptee** → existing/third-party class (`ThirdPartyPayment`) with a different interface.
- **Adapter** → translates between them (`PaymentAdapter`).

---
##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Adapter
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

## How it Works

### 1. Target Interface – `PaymentProcessor.ts`
The application expects all payment processors to implement this interface:
```ts
export interface PaymentProcessor {
    pay(amount: number): void;
}
```

### 2. Adaptee – `ThirdPartyPayment.ts`
A third-party payment system with a different interface (makePayment instead of pay):
```ts
export class ThirdPartyPayment {
    makePayment(value: number): void {
        console.log(`Third-party payment of ${value} completed`);
    }
}
```

### 3. Adapter – `PaymentAdapter.ts`
The adapter translates the pay method into the third-party’s makePayment method:
```ts
import { PaymentProcessor } from "../interfaces/paymentProcessor";
import { ThirdPartyPayment } from "../thirdParty/ThirdPartyPayment";

export class PaymentAdapter implements PaymentProcessor {
    private thirdPartyPayment: ThirdPartyPayment;

    constructor() {
        this.thirdPartyPayment = new ThirdPartyPayment();
    }

    pay(amount: number): void {
        this.thirdPartyPayment.makePayment(amount);
    }
}
```

### 4. Client – `main.ts`
The client uses the PaymentProcessor interface without worrying about third-party details:
```ts
import { PaymentProcessor } from "./interfaces/paymentProcessor";
import { PaymentAdapter } from "./adapters/PaymentAdapter";

function processTransaction(processor: PaymentProcessor, amount: number): void {
    console.log("Processing payment...");
    processor.pay(amount);
}

const paymentProcessor = new PaymentAdapter();
processTransaction(paymentProcessor, 1000);
```
---

### Code Without Adapter Pattern
If we don’t use the Adapter pattern, the client would directly depend on the third-party class:
```ts
import { ThirdPartyPayment } from "./thirdParty/ThirdPartyPayment";

function processTransaction(amount: number): void {
    console.log("Processing payment...");
    const thirdPartyPayment = new ThirdPartyPayment();
    thirdPartyPayment.makePayment(amount); // Directly using third-party method
}

processTransaction(1000);
```

### Problems
- Tight Coupling – Client code directly depends on the third-party class.
- Difficult to Replace – If the third-party API changes (e.g., makePayment → process), client code breaks everywhere.
- No Abstraction – cannot easily swap third-party payment providers.
- Reduced Testability – Hard to mock or replace third-party class in unit tests.

### Advantages of Adapter pattern
- Loose Coupling → Client depends on an interface, not a third-party class.
- Flexibility → Easy to switch third-party libraries without modifying client code.
- Reusability → The adapter allows integration with multiple systems.
- Testability → Client code is testable with mock adapters.
