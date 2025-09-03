import { IAlert } from "../interfaces/Alert";

export class MobileAlert implements IAlert {
    show(message: string): void {
        console.log(`Mobile Alert: ${message}`);
    }
}
