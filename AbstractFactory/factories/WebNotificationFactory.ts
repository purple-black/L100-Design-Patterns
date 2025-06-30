import { NotificationFactory } from "../interfaces/NotificationFactory";
import { Alert } from "../interfaces/Alert";
import { Toast } from "../interfaces/Toast";
import { WebAlert } from "../products/WebAlert";
import { WebToast } from "../products/WebToast";

export class WebNotificationFactory implements NotificationFactory {
    createAlert(): Alert {
        return new WebAlert();
    }
    createToast(): Toast {
        return new WebToast();
    }
}
