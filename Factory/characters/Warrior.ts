import { GameCharacter } from "./GameCharacter";

// warrior class with the structure given in GameCharacter, defines four of its properties.
export class Warrior implements GameCharacter {
    name = "Warrior";
    health = 150;
    weapon = "Sword";
    specialSkill = "Power Strike";

    // to log the properties of the Warrior class.
    displayCharacteristics(): void {
        console.log(`${this.name}: Health=${this.health}, Weapon=${this.weapon}, Skill=${this.specialSkill}`);
    }
}
