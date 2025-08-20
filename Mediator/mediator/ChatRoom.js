"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = void 0;
// Concrete Mediator Implementation
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
        this.users = [];
    }
    ChatRoom.prototype.addUser = function (user) {
        this.users.push(user);
    };
    ChatRoom.prototype.sendMessage = function (message, sender, receiver) {
        if (receiver) {
            // Private message
            receiver.receive(message, sender);
        }
        else {
            // Broadcast message
            this.users.forEach(function (user) {
                if (user !== sender) {
                    user.receive(message, sender);
                }
            });
        }
    };
    return ChatRoom;
}());
exports.ChatRoom = ChatRoom;
