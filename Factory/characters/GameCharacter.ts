/*
interface that defines the struction of the GameCharacter classes like Warrior, Mage and Archer
*/

export interface IGameCharacter {
    name: string;
    health: number;
    weapon: string;
    specialSkill: string;
    // this function is to log the properties of the character.
    displayCharacteristics(): void;
}