"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = void 0;
// Concrete Mediator Implementation
class ChatRoom {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    sendMessage(message, sender, receiver) {
        if (receiver) {
            // Private message
            receiver.receive(message, sender);
        }
        else {
            // Broadcast message
            this.users.forEach(user => {
                if (user !== sender) {
                    user.receive(message, sender);
                }
            });
        }
    }
}
exports.ChatRoom = ChatRoom;
//# sourceMappingURL=ChatRoom.js.map