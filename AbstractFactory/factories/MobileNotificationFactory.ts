import { INotificationFactory } from "../interfaces/NotificationFactory";
import { IAlert } from "../interfaces/Alert";
import { IToast } from "../interfaces/Toast";
import { MobileAlert } from "../products/MobileAlert";
import { MobileToast } from "../products/MobileToast";

export class MobileNotificationFactory implements INotificationFactory {
    createAlert(): IAlert {
        return new MobileAlert();
    }
    createToast(): IToast {
        return new MobileToast();
    }
}
