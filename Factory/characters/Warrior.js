"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
// warrior class with the structure given in GameCharacter, defines four of its properties.
var Warrior = /** @class */ (function () {
    function Warrior() {
        this.name = "Warrior";
        this.health = 150;
        this.weapon = "Sword";
        this.specialSkill = "Power Strike";
    }
    // to log the properties of the Warrior class.
    Warrior.prototype.displayCharacteristics = function () {
        console.log("".concat(this.name, ": Health=").concat(this.health, ", Weapon=").concat(this.weapon, ", Skill=").concat(this.specialSkill));
    };
    return Warrior;
}());
exports.Warrior = Warrior;
