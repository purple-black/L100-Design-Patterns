import { Toast } from "../interfaces/Toast";

export class WebToast implements Toast {
    display(message: string): void {
        console.log(`Web Toast: ${message}`);
    }
}
