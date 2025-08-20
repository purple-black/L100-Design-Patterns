"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// Abstract User (Colleague)
var User = /** @class */ (function () {
    function User(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
