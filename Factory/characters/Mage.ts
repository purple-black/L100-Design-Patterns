import { GameCharacter } from "./GameCharacter";

// Mage class with the structure given in GameCharacter, defines four of its properties.
export class Mage implements GameCharacter {
    name = "Mage";
    health = 100;
    weapon = "Staff";
    specialSkill = "Fireball";
    // to log the properties of the Mage class.
    displayCharacteristics(): void {
        console.log(`${this.name}: Health=${this.health}, Weapon=${this.weapon}, Skill=${this.specialSkill}`);
    }
}