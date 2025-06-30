import { Alert } from "../interfaces/Alert";

export class WebAlert implements Alert {
    show(message: string): void {
        console.log(`Web Alert: ${message}`);
    }
}
