"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
// Mage class with the structure given in GameCharacter, defines four of its properties.
class Mage {
    constructor() {
        this.name = "Mage";
        this.health = 100;
        this.weapon = "Staff";
        this.specialSkill = "Fireball";
    }
    // to log the properties of the Mage class.
    displayCharacteristics() {
        console.log(`${this.name}: Health=${this.health}, Weapon=${this.weapon}, Skill=${this.specialSkill}`);
    }
}
exports.Mage = Mage;
//# sourceMappingURL=Mage.js.map