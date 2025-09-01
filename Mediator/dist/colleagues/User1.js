"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1 = void 0;
const User_1 = require("./User");
class User1 extends User_1.User {
    constructor(name, mediator) {
        super(name, mediator);
    }
    send(message, receiver) {
        console.log(`[User1: ${this.name}] sends: ${message}`);
        this.mediator.sendMessage(message, this, receiver);
    }
    receive(message, sender) {
        console.log(`[User1: ${this.name}] receives from [${sender.getName()}]: ${message}`);
    }
}
exports.User1 = User1;
//# sourceMappingURL=User1.js.map