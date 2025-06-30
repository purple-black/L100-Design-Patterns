"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebNotificationFactory_1 = require("./factories/WebNotificationFactory");
var MobileNotificationFactory_1 = require("./factories/MobileNotificationFactory");
function runApp(factory) {
    var alert = factory.createAlert();
    var toast = factory.createToast();
    alert.show("Page Not Responding!");
    toast.display("Your data was stored successfully");
}
var platform = "web";
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
