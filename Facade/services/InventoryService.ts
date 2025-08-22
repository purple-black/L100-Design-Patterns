export class InventoryService {
    private stock: Record<string, number> = {
        "product456": 3,
        "product789": 0,
        "product123": 5
    };

    checkStock(productId: string): boolean {
        const quantity = this.stock[productId];

        if (quantity && quantity > 0) {
            this.stock[productId] -= 1; // Reduce stock after successful check
            console.log(`Product ${productId} is in stock. Remaining: ${this.stock[productId]}`);
            return true;
        }

        return false;
    }
}

