import { Toast } from "../interfaces/Toast";

export class MobileToast implements Toast {
    display(message: string): void {
        console.log(`Mobile Toast: ${message}`);
    }
}
