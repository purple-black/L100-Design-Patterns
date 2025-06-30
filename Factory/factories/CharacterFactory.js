"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterFactory = void 0;
var Warrior_1 = require("../characters/Warrior");
var Mage_1 = require("../characters/Mage");
var Archer_1 = require("../characters/Archer");
// the factory whihc has the method to create the respective characters
//  based on the character type given from the main.ts
var CharacterFactory = /** @class */ (function () {
    function CharacterFactory() {
    }
    CharacterFactory.createCharacter = function (type) {
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
    };
    return CharacterFactory;
}());
exports.CharacterFactory = CharacterFactory;
