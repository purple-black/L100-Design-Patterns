import { NotificationFactory } from "../interfaces/NotificationFactory";
import { Alert } from "../interfaces/Alert";
import { Toast } from "../interfaces/Toast";
import { MobileAlert } from "../products/MobileAlert";
import { MobileToast } from "../products/MobileToast";

export class MobileNotificationFactory implements NotificationFactory {
    createAlert(): Alert {
        return new MobileAlert();
    }
    createToast(): Toast {
        return new MobileToast();
    }
}
