"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebNotificationFactory = void 0;
var WebAlert_1 = require("../products/WebAlert");
var WebToast_1 = require("../products/WebToast");
var WebNotificationFactory = /** @class */ (function () {
    function WebNotificationFactory() {
    }
    WebNotificationFactory.prototype.createAlert = function () {
        return new WebAlert_1.WebAlert();
    };
    WebNotificationFactory.prototype.createToast = function () {
        return new WebToast_1.WebToast();
    };
    return WebNotificationFactory;
}());
exports.WebNotificationFactory = WebNotificationFactory;
