"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNotificationFactory = void 0;
var MobileAlert_1 = require("../products/MobileAlert");
var MobileToast_1 = require("../products/MobileToast");
var MobileNotificationFactory = /** @class */ (function () {
    function MobileNotificationFactory() {
    }
    MobileNotificationFactory.prototype.createAlert = function () {
        return new MobileAlert_1.MobileAlert();
    };
    MobileNotificationFactory.prototype.createToast = function () {
        return new MobileToast_1.MobileToast();
    };
    return MobileNotificationFactory;
}());
exports.MobileNotificationFactory = MobileNotificationFactory;
