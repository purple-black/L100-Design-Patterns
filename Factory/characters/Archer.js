"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
// Archer class with the structure given in GameCharacter, defines four of its properties.
var Archer = /** @class */ (function () {
    function Archer() {
        this.name = "Archer";
        this.health = 120;
        this.weapon = "Bow";
        this.specialSkill = "Piercing Arrow";
    }
    // to log the properties of the Archer class.
    Archer.prototype.displayCharacteristics = function () {
        console.log("".concat(this.name, ": Health=").concat(this.health, ", Weapon=").concat(this.weapon, ", Skill=").concat(this.specialSkill));
    };
    return Archer;
}());
exports.Archer = Archer;
