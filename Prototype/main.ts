import { PlayerCharacter } from "./models/PlayerCharacter";
import { CharacterSpawner } from "./spawner/CharacterSpawner";

// Create base character prototype
const baseCharacter = new PlayerCharacter("Player1", "green", { x: 0, y: 0 });

// Initializing spawner
const spawner = new CharacterSpawner(baseCharacter);

// making clones of the character
const runner1 = spawner.spawnCharacter({ name: "Ash", appearance: "green",  position: { x: 10, y: 0 } });
const runner2 = spawner.spawnCharacter({ name: "Bob", appearance: "red", position: { x: 20, y: 0 } });

runner1.display();
runner2.display();
