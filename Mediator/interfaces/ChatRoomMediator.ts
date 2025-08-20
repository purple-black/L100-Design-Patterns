import { User } from "../colleagues/User";

// Mediator interface defines contract for communication
export interface ChatRoomMediator {
    sendMessage(message: string, sender: User, receiver?: User): void;
}
