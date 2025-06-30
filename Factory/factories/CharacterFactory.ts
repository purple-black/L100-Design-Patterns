import { GameCharacter } from "../characters/GameCharacter";
import { Warrior } from "../characters/Warrior";
import { Mage } from "../characters/Mage";
import { Archer } from "../characters/Archer";

// the factory whihc has the method to create the respective characters
//  based on the character type given from the main.ts
export class CharacterFactory {
    static createCharacter(type: string): GameCharacter{
        switch (type.toLowerCase()) {
            case "warrior":
                return new Warrior();
            case "mage":
                return new Mage();
            case "archer":
                return new Archer();
            default:
                throw new Error('Oops!!! Character not found!!!');
            
        }
    }
}