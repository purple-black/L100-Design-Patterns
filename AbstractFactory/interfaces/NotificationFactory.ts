import { IAlert } from "./Alert";
import { IToast } from "./Toast";

export interface INotificationFactory {
    createAlert(): IAlert;
    createToast(): IToast;
}
