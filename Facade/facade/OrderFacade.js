"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFacade = void 0;
var InventoryService_1 = require("../services/InventoryService");
var PaymentService_1 = require("../services/PaymentService");
var ShippingService_1 = require("../services/ShippingService");
var NotificationService_1 = require("../services/NotificationService");
var OrderFacade = /** @class */ (function () {
    function OrderFacade() {
        this.inventory = new InventoryService_1.InventoryService();
        this.payment = new PaymentService_1.PaymentService();
        this.shipping = new ShippingService_1.ShippingService();
        this.notification = new NotificationService_1.NotificationService();
    }
    OrderFacade.prototype.placeOrder = function (userId, productId, amount) {
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
        console.log("Order placed successfully!");
    };
    return OrderFacade;
}());
exports.OrderFacade = OrderFacade;
