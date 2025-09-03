import { IAlert } from "../interfaces/Alert";

export class WebAlert implements IAlert {
    show(message: string): void {
        console.log(`Web Alert: ${message}`);
    }
}
