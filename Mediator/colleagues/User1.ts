import { User } from "./User";
import { ChatRoomMediator } from "../interfaces/ChatRoomMediator";

export class User1 extends User {
    constructor(name: string, mediator: ChatRoomMediator) {
        super(name, mediator);
    }

    send(message: string, receiver?: User): void {
        console.log(`[User1: ${this.name}] sends: ${message}`);
        this.mediator.sendMessage(message, this, receiver);
    }

    receive(message: string, sender: User): void {
        console.log(`[User1: ${this.name}] receives from [${sender.getName()}]: ${message}`);
    }
}

