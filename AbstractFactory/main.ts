import { NotificationFactory } from "./interfaces/NotificationFactory";
import { Alert } from "./interfaces/Alert";
import { Toast } from "./interfaces/Toast";

import { WebNotificationFactory } from "./factories/WebNotificationFactory";
import { MobileNotificationFactory } from "./factories/MobileNotificationFactory";

function runApp(factory: NotificationFactory) {
    const alert: Alert = factory.createAlert();
    const toast: Toast = factory.createToast();

    alert.show("Page Not Responding!");
    toast.display("Your data was stored successfully");
}

var platform = "mobile";

if (platform == 'web') {
    var factory: NotificationFactory = new WebNotificationFactory();
    runApp(factory);
}
else if (platform == 'mobile') {
    var factory: NotificationFactory = new MobileNotificationFactory();
    runApp(factory);
} else {
    console.log("product type not defined!");
}
