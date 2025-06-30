"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
// Mage class with the structure given in GameCharacter, defines four of its properties.
var Mage = /** @class */ (function () {
    function Mage() {
        this.name = "Mage";
        this.health = 100;
        this.weapon = "Staff";
        this.specialSkill = "Fireball";
    }
    // to log the properties of the Mage class.
    Mage.prototype.displayCharacteristics = function () {
        console.log("".concat(this.name, ": Health=").concat(this.health, ", Weapon=").concat(this.weapon, ", Skill=").concat(this.specialSkill));
    };
    return Mage;
}());
exports.Mage = Mage;
