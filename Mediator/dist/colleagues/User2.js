"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User2 = void 0;
const User_1 = require("./User");
class User2 extends User_1.User {
    constructor(name, mediator) {
        super(name, mediator);
    }
    send(message, receiver) {
        console.log(`[User2: ${this.name}] sends: ${message}`);
        this.mediator.sendMessage(message, this, receiver);
    }
    receive(message, sender) {
        console.log(`[User2: ${this.name}] receives from [${sender.getName()}]: ${message}`);
    }
}
exports.User2 = User2;
//# sourceMappingURL=User2.js.map