import { INotificationFactory } from "./interfaces/NotificationFactory";
import { IAlert } from "./interfaces/Alert";
import { IToast } from "./interfaces/Toast";

import { WebNotificationFactory } from "./factories/WebNotificationFactory";
import { MobileNotificationFactory } from "./factories/MobileNotificationFactory";

function runApp(factory: INotificationFactory) {
    const alert: IAlert = factory.createAlert();
    const toast: IToast = factory.createToast();

    alert.show("Page Not Responding!");
    toast.display("Your data was stored successfully");
}

var platform = "mobile";

if (platform == 'web') {
    var factory: INotificationFactory = new WebNotificationFactory();
    runApp(factory);
}
else if (platform == 'mobile') {
    var factory: INotificationFactory = new MobileNotificationFactory();
    runApp(factory);
} else {
    console.log("product type not defined!");
}
