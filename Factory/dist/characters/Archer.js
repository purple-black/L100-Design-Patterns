"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
// Archer class with the structure given in GameCharacter, defines four of its properties.
class Archer {
    constructor() {
        this.name = "Archer";
        this.health = 120;
        this.weapon = "Bow";
        this.specialSkill = "Piercing Arrow";
    }
    // to log the properties of the Archer class.
    displayCharacteristics() {
        console.log(`${this.name}: Health=${this.health}, Weapon=${this.weapon}, Skill=${this.specialSkill}`);
    }
}
exports.Archer = Archer;
//# sourceMappingURL=Archer.js.map