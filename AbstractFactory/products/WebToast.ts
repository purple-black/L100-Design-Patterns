import { IToast } from "../interfaces/Toast";

export class WebToast implements IToast {
    display(message: string): void {
        console.log(`Web Toast: ${message}`);
    }
}
