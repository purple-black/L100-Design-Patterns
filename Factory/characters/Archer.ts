import { GameCharacter } from "./GameCharacter";

// Archer class with the structure given in GameCharacter, defines four of its properties.
export class Archer implements GameCharacter {
    name = "Archer";
    health = 120;
    weapon = "Bow";
    specialSkill = "Piercing Arrow";
    // to log the properties of the Archer class.
    displayCharacteristics(): void {
        console.log(`${this.name}: Health=${this.health}, Weapon=${this.weapon}, Skill=${this.specialSkill}`);
    }
}