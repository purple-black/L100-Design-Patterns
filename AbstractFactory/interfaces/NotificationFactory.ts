import { Alert } from "./Alert";
import { Toast } from "./Toast";

export interface NotificationFactory {
    createAlert(): Alert;
    createToast(): Toast;
}
