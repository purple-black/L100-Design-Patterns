import { IChatRoomMediator } from "../interfaces/ChatRoomMediator";

// Abstract User (Colleague)
export abstract class User {
    protected mediator: IChatRoomMediator;
    protected name: string;

    constructor(name: string, mediator: IChatRoomMediator) {
        this.name = name;
        this.mediator = mediator;
    }

    getName(): string {
        return this.name;
    }

    abstract send(message: string, receiver?: User): void;
    abstract receive(message: string, sender: User): void;
}

