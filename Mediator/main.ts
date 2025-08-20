import { ChatRoom } from "./mediator/ChatRoom";
import { User1 } from "./colleagues/User1";
import { User2 } from "./colleagues/User2";

const chatRoom = new ChatRoom();

const user1 = new User1("Alice", chatRoom);
const user2 = new User2("Bob", chatRoom);
const user3 = new User2("Charlie", chatRoom); // User1/User2 type

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

// Broadcast
user1.send("Hello everyone!");

// Private message
user2.send("Hey Alice!", user1);
