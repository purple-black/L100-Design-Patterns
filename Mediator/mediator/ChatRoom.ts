import { ChatRoomMediator } from "../interfaces/ChatRoomMediator";
import { User } from "../colleagues/User";

// Concrete Mediator Implementation
export class ChatRoom implements ChatRoomMediator {
    private users: User[] = [];

    addUser(user: User) {
        this.users.push(user);
    }

    sendMessage(message: string, sender: User, receiver?: User): void {
        if (receiver) {
            // Private message
            receiver.receive(message, sender);
        } else {
            // Broadcast message
            this.users.forEach(user => {
                if (user !== sender) {
                    user.receive(message, sender);
                }
            });
        }
    }
}

