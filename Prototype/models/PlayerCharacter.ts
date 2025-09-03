import { ICharacterPrototype } from "../prototype/CharacterPrototype";

export interface Position {
    x: number;
    y: number;
}
//concrete prototype class implementing the CharacterPrototype interface
export class PlayerCharacter implements ICharacterPrototype {
    name: string;
    appearance: string;
    position: Position;

    constructor(name: string, appearance: string, position: Position) {
        this.name = name;
        this.appearance = appearance;
        this.position = position;
    }

    // The clone() method - returns a new instance of PlayerCharacter with the same data.
    clone(): PlayerCharacter {
        return new PlayerCharacter(
            this.name,
            this.appearance,
            { ...this.position } // same position data but diffrenct ref. 
        );
    }

    display(): void {
        console.log(
            `${this.name}, position:  (${this.position.x}, ${this.position.y}), appearance:  ${this.appearance}`
        );
    }
}
