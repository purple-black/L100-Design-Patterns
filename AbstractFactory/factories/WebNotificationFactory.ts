import { INotificationFactory } from "../interfaces/NotificationFactory";
import { IAlert } from "../interfaces/Alert";
import { IToast } from "../interfaces/Toast";
import { WebAlert } from "../products/WebAlert";
import { WebToast } from "../products/WebToast";

export class WebNotificationFactory implements INotificationFactory {
    createAlert(): IAlert {
        return new WebAlert();
    }
    createToast(): IToast {
        return new WebToast();
    }
}
