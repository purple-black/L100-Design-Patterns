"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// Abstract User (Colleague)
class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map