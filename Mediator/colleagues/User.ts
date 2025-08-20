import { ChatRoomMediator } from "../interfaces/ChatRoomMediator";

// Abstract User (Colleague)
export abstract class User {
    protected mediator: ChatRoomMediator;
    protected name: string;

    constructor(name: string, mediator: ChatRoomMediator) {
        this.name = name;
        this.mediator = mediator;
    }

    getName(): string {
        return this.name;
    }

    abstract send(message: string, receiver?: User): void;
    abstract receive(message: string, sender: User): void;
}

