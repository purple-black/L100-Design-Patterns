"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCharacter = void 0;
//concrete prototype class implementing the CharacterPrototype interface
class PlayerCharacter {
    constructor(name, appearance, position) {
        this.name = name;
        this.appearance = appearance;
        this.position = position;
    }
    // The clone() method - returns a new instance of PlayerCharacter with the same data.
    clone() {
        return new PlayerCharacter(this.name, this.appearance, Object.assign({}, this.position));
    }
    display() {
        console.log(`${this.name}, position:  (${this.position.x}, ${this.position.y}), appearance:  ${this.appearance}`);
    }
}
exports.PlayerCharacter = PlayerCharacter;
//# sourceMappingURL=PlayerCharacter.js.map