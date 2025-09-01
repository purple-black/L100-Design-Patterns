"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerCharacter_1 = require("./models/PlayerCharacter");
const CharacterSpawner_1 = require("./spawner/CharacterSpawner");
// Create base character prototype
const baseCharacter = new PlayerCharacter_1.PlayerCharacter("Player1", "green", { x: 0, y: 0 });
// Initializing spawner
const spawner = new CharacterSpawner_1.CharacterSpawner(baseCharacter);
// making clones of the character
const runner1 = spawner.spawnCharacter({ name: "Ash", appearance: "green", position: { x: 10, y: 0 } });
const runner2 = spawner.spawnCharacter({ name: "Bob", appearance: "red", position: { x: 20, y: 0 } });
runner1.display();
runner2.display();
//# sourceMappingURL=main.js.map