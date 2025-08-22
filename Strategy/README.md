# Strategy Design Pattern

##  Definition
The **Strategy Pattern** is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable without altering the client code.

---

##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Strategy
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

## Use Case: 
building a Payment System
A customer should be able to pay using different methods:Credit Card, PayPal, UPI

- Strategy Interface

Defines a common contract for all strategies (e.g., all payment methods must have a pay() function).
Ensures consistency across different algorithms.

- Concrete Strategies

These are the actual implementations of the strategy interface.
Example: CreditCardPayment, PayPalPayment, UpiPayment.
Each one has its own logic for how the operation is done.

- Context

Holds a reference to a strategy.
Provides a method to set/change the strategy at runtime.
Delegates the actual work (e.g., payment processing) to the chosen strategy.

- Client

The part of the program that uses the context.
It decides which strategy to use and can switch strategies dynamically.

---

## Problem Without the Pattern
build a payment system where users can pay using **Credit Card**, **PayPal**, or **UPI**.

Without the Strategy Pattern:

```ts
class PaymentService {
  pay(amount: number, method: string) {
    if (method === "credit") {
      console.log(`Paid ₹${amount} using Credit Card.`);
    } else if (method === "paypal") {
      console.log(`Paid ₹${amount} using PayPal.`);
    } else if (method === "upi") {
      console.log(`Paid ₹${amount} using UPI.`);
    } else {
      console.log("Invalid payment method");
    }
  }
}

// Usage
const service = new PaymentService();
service.pay(1000, "credit");
service.pay(2000, "paypal");
service.pay(500, "upi");

```

---

## Problems 

- Violation of Open/Closed Principle – If we add a new payment method (e.g., Crypto), we must modify the pay method.
- Tight Coupling – All payment logic is inside one class.
- Hard to Maintain – Large if-else or switch blocks.
- No Runtime Flexibility – We can’t easily change the payment method dynamically.

## Advantages of Strategy pattern

- Removes long conditional logic (if-else / switch)
- Makes code extensible (new strategies don’t require modifying old code)
- Follows Open/Closed Principle
- Strategies can be interchanged dynamically at runtime
- Cleaner, modular, and easier to test
