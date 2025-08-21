# Facade Design Pattern

## Introduction
The **Facade Design Pattern** is a **structural design pattern** that provides a **simplified interface** to a larger and more complex subsystem. Instead of interacting with multiple services/classes directly, the client interacts with a **Facade**, which delegates the calls to the appropriate underlying services.

This makes the system **easier to use, maintain, and extend** without exposing unnecessary complexity to the client.

---

How to Run

Clone the repo: 

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Facade
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

### How It Works
In this project, the process of placing an order involves multiple steps:
1. Checking product availability (`InventoryService`)
2. Processing payment (`PaymentService`)
3. Shipping the product (`ShippingService`)
4. Sending confirmation to the user (`NotificationService`)

Instead of the client managing all these services individually, the **`OrderFacade`** class orchestrates everything:
- The client only calls `orderFacade.placeOrder(...)`.
- Internally, the `OrderFacade` takes care of all the required service calls in the correct order.

---

## Code Without Facade

```ts
import { InventoryService } from "./services/InventoryService";
import { PaymentService } from "./services/PaymentService";
import { ShippingService } from "./services/ShippingService";
import { NotificationService } from "./services/NotificationService";

// Client directly interacts with all services
const inventory = new InventoryService();
const payment = new PaymentService();
const shipping = new ShippingService();
const notification = new NotificationService();

console.log("----- Placing Order -----");

const productId = "product456";
const userId = "user123";
const amount = 999;

if (!inventory.checkStock(productId)) {
    console.log("Product out of stock.");
} else {
    if (!payment.makePayment(userId, amount)) {
        console.log("Payment failed.");
    } else {
        shipping.shipProduct(productId, userId);
        notification.sendConfirmation(userId);
        console.log("Order placed successfully!");
    }
}
```

## Problems Without Facade

- Tight coupling: The client directly depends on multiple services.
- Code duplication: Every client that wants to place an order must repeat the same logic.
- Hard to maintain: If one service changes (e.g., payment logic), all clients need updating.
- Complex client code: Clients should focus on business logic, not service orchestration.

## Advantages of Facade Pattern

- Simplifies client interaction – Only one method (placeOrder) is needed.
- Reduces coupling – Clients are decoupled from underlying services.
- Improves maintainability – Changes inside services don’t affect clients.
- Centralized logic – The workflow is managed in one place (the facade).
- Reusable – Any client can reuse the facade without duplicating service calls.

## Use Facade

- When you have a complex system with multiple services or APIs.
- When you want to reduce dependencies between clients and subsystems.
- When you want to provide a cleaner, simpler interface to clients.
