"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
var InventoryService = /** @class */ (function () {
    function InventoryService() {
        this.stock = {
            "product456": 3,
            "product789": 0,
            "product123": 5
        };
    }
    InventoryService.prototype.checkStock = function (productId) {
        var quantity = this.stock[productId];
        if (quantity && quantity > 0) {
            this.stock[productId] -= 1; // Reduce stock after successful check
            console.log("Product ".concat(productId, " is in stock. Remaining: ").concat(this.stock[productId]));
            return true;
        }
        console.log("Product ".concat(productId, " is out of stock."));
        return false;
    };
    return InventoryService;
}());
exports.InventoryService = InventoryService;
