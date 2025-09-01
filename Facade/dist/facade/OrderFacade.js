"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFacade = void 0;
const InventoryService_1 = require("../services/InventoryService");
const PaymentService_1 = require("../services/PaymentService");
const ShippingService_1 = require("../services/ShippingService");
const NotificationService_1 = require("../services/NotificationService");
// manages all the services.
class OrderFacade {
    constructor() {
        this.inventory = new InventoryService_1.InventoryService();
        this.payment = new PaymentService_1.PaymentService();
        this.shipping = new ShippingService_1.ShippingService();
        this.notification = new NotificationService_1.NotificationService();
    }
    placeOrder(userId, productId, amount) {
        console.log("----- Placing Order -----");
        if (!this.inventory.checkStock(productId)) {
            console.log("Product out of stock.");
            return;
        }
        if (!this.payment.makePayment(userId, amount)) {
            console.log("Payment failed.");
            return;
        }
        this.shipping.shipProduct(productId, userId);
        this.notification.sendConfirmation(userId);
    }
}
exports.OrderFacade = OrderFacade;
//# sourceMappingURL=OrderFacade.js.map