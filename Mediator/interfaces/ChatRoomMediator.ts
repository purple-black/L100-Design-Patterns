import { User } from "../colleagues/User";

// Mediator interface defines contract for communication
export interface IChatRoomMediator {
    sendMessage(message: string, sender: User, receiver?: User): void;
}
