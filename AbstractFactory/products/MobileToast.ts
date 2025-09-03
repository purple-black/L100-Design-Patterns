import { IToast } from "../interfaces/Toast";

export class MobileToast implements IToast {
    display(message: string): void {
        console.log(`Mobile Toast: ${message}`);
    }
}
