export class ShippingService {
    shipProduct(productId: string, userId: string): void {
        console.log(`Shipping product ${productId} to user ${userId}`);
    }
}
