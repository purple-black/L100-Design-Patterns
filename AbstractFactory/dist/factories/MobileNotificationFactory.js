"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNotificationFactory = void 0;
const MobileAlert_1 = require("../products/MobileAlert");
const MobileToast_1 = require("../products/MobileToast");
class MobileNotificationFactory {
    createAlert() {
        return new MobileAlert_1.MobileAlert();
    }
    createToast() {
        return new MobileToast_1.MobileToast();
    }
}
exports.MobileNotificationFactory = MobileNotificationFactory;
//# sourceMappingURL=MobileNotificationFactory.js.map