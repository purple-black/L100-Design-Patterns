"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
class InventoryService {
    constructor() {
        this.stock = {
            "product456": 3,
            "product789": 0,
            "product123": 5
        };
    }
    checkStock(productId) {
        const quantity = this.stock[productId];
        if (quantity && quantity > 0) {
            this.stock[productId] -= 1; // Reduce stock after successful check
            console.log(`Product ${productId} is in stock. Remaining: ${this.stock[productId]}`);
            return true;
        }
        return false;
    }
}
exports.InventoryService = InventoryService;
//# sourceMappingURL=InventoryService.js.map