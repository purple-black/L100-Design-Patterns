import { Alert } from "../interfaces/Alert";

export class MobileAlert implements Alert {
    show(message: string): void {
        console.log(`Mobile Alert: ${message}`);
    }
}
