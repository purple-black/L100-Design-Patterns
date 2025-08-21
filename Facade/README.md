# Facade Design Pattern

## Introduction
The **Facade Design Pattern** is a **structural design pattern** that provides a **simplified interface** to a larger and more complex subsystem. Instead of interacting with multiple services/classes directly, the client interacts with a **Facade**, which delegates the calls to the appropriate underlying services.

This makes the system **easier to use, maintain, and extend** without exposing unnecessary complexity to the client.

---

How to Run <br><br>

Clone the repo: <br><br>

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Facade
```
<br><br>
Install TypeScript: <br><br>

```
npm install -g typescript
```
<br><br>
Open terminal and enter:<br>
Compile TypeScript and then run the compiled javascript file<br><br>

```
tsc main.ts <br>
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

## Project Structure
