"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
// warrior class with the structure given in GameCharacter, defines four of its properties.
class Warrior {
    constructor() {
        this.name = "Warrior";
        this.health = 150;
        this.weapon = "Sword";
        this.specialSkill = "Power Strike";
    }
    // to log the properties of the Warrior class.
    displayCharacteristics() {
        console.log(`${this.name}: Health=${this.health}, Weapon=${this.weapon}, Skill=${this.specialSkill}`);
    }
}
exports.Warrior = Warrior;
//# sourceMappingURL=Warrior.js.map