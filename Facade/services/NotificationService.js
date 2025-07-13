"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.sendConfirmation = function (userId) {
        console.log("Sending order confirmation to user: ".concat(userId));
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;
