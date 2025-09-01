"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebNotificationFactory = void 0;
const WebAlert_1 = require("../products/WebAlert");
const WebToast_1 = require("../products/WebToast");
class WebNotificationFactory {
    createAlert() {
        return new WebAlert_1.WebAlert();
    }
    createToast() {
        return new WebToast_1.WebToast();
    }
}
exports.WebNotificationFactory = WebNotificationFactory;
//# sourceMappingURL=WebNotificationFactory.js.map