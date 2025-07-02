"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCharacter = void 0;
//concrete prototype class implementing the CharacterPrototype interface
var PlayerCharacter = /** @class */ (function () {
    function PlayerCharacter(name, appearance, position) {
        this.name = name;
        this.appearance = appearance;
        this.position = position;
    }
    // The clone() method - returns a new instance of PlayerCharacter with the same data.
    PlayerCharacter.prototype.clone = function () {
        return new PlayerCharacter(this.name, this.appearance, __assign({}, this.position));
    };
    PlayerCharacter.prototype.display = function () {
        console.log("".concat(this.name, ", position:  (").concat(this.position.x, ", ").concat(this.position.y, "), appearance:  ").concat(this.appearance));
    };
    return PlayerCharacter;
}());
exports.PlayerCharacter = PlayerCharacter;
