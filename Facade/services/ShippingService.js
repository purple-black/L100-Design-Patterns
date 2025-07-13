"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingService = void 0;
var ShippingService = /** @class */ (function () {
    function ShippingService() {
    }
    ShippingService.prototype.shipProduct = function (productId, userId) {
        console.log("Shipping product ".concat(productId, " to user ").concat(userId));
    };
    return ShippingService;
}());
exports.ShippingService = ShippingService;
