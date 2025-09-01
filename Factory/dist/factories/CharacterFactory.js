"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterFactory = void 0;
const Warrior_1 = require("../characters/Warrior");
const Mage_1 = require("../characters/Mage");
const Archer_1 = require("../characters/Archer");
// the factory whihc has the method to create the respective characters
//  based on the character type given from the main.ts
class CharacterFactory {
    static createCharacter(type) {
        switch (type.toLowerCase()) {
            case "warrior":
                return new Warrior_1.Warrior();
            case "mage":
                return new Mage_1.Mage();
            case "archer":
                return new Archer_1.Archer();
            default:
                throw new Error('Oops!!! Character not found!!!');
        }
    }
}
exports.CharacterFactory = CharacterFactory;
//# sourceMappingURL=CharacterFactory.js.map