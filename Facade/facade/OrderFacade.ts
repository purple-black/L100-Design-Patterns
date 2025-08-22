import { InventoryService } from "../services/InventoryService";
import { PaymentService } from "../services/PaymentService";
import { ShippingService } from "../services/ShippingService";
import { NotificationService } from "../services/NotificationService";


// manages all the services.
export class OrderFacade {
    private inventory = new InventoryService();
    private payment = new PaymentService();
    private shipping = new ShippingService();
    private notification = new NotificationService();

    placeOrder(userId: string, productId: string, amount: number): void {
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
