"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebNotificationFactory_1 = require("./factories/WebNotificationFactory");
const MobileNotificationFactory_1 = require("./factories/MobileNotificationFactory");
function runApp(factory) {
    const alert = factory.createAlert();
    const toast = factory.createToast();
    alert.show("Page Not Responding!");
    toast.display("Your data was stored successfully");
}
var platform = "mobile";
if (platform == 'web') {
    var factory = new WebNotificationFactory_1.WebNotificationFactory();
    runApp(factory);
}
else if (platform == 'mobile') {
    var factory = new MobileNotificationFactory_1.MobileNotificationFactory();
    runApp(factory);
}
else {
    console.log("product type not defined!");
}
//# sourceMappingURL=main.js.map