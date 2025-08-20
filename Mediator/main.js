"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChatRoom_1 = require("./mediator/ChatRoom");
var User1_1 = require("./colleagues/User1");
var User2_1 = require("./colleagues/User2");
var chatRoom = new ChatRoom_1.ChatRoom();
var user1 = new User1_1.User1("Alice", chatRoom);
var user2 = new User2_1.User2("Bob", chatRoom);
var user3 = new User2_1.User2("Charlie", chatRoom); // User1/User2 type
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);
// Broadcast
user1.send("Hello everyone!");
// Private message
user2.send("Hey Alice!", user1);
