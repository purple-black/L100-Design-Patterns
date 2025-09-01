"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatRoom_1 = require("./mediator/ChatRoom");
const User1_1 = require("./colleagues/User1");
const User2_1 = require("./colleagues/User2");
const chatRoom = new ChatRoom_1.ChatRoom();
const user1 = new User1_1.User1("Alice", chatRoom);
const user2 = new User2_1.User2("Bob", chatRoom);
const user3 = new User2_1.User2("Charlie", chatRoom); // User1/User2 type
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);
// Broadcast
user1.send("Hello everyone!");
// Private message
user2.send("Hey Alice!", user1);
//# sourceMappingURL=main.js.map