import { PlayerCharacter } from "../models/PlayerCharacter";

interface ISpawnOptions {
    name?: string;
    appearance?: string;
    position?: { x: number; y: number };
}
//CharacterSpawner is the "client" that uses the prototype to create clones.
export class CharacterSpawner {
    private prototype: PlayerCharacter; // clones are made from this base character.

    constructor(prototype: PlayerCharacter) { // constructor has the prototype instance to reuse.
        this.prototype = prototype;
    }

    spawnCharacter(options: ISpawnOptions): PlayerCharacter {
        const clone = this.prototype.clone(); // cloning using the clone method of the prototype.

        if (options.name) clone.name = options.name;
        if (options.appearance) clone.appearance = options.appearance;
        if (options.position) clone.position = options.position;
        
        return clone;
    }
}
