"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerCharacter_1 = require("./models/PlayerCharacter");
var CharacterSpawner_1 = require("./spawner/CharacterSpawner");
// Create base character prototype
var baseCharacter = new PlayerCharacter_1.PlayerCharacter("Player1", "green tracksuit", { x: 0, y: 0 });
// Initializing spawner
var spawner = new CharacterSpawner_1.CharacterSpawner(baseCharacter);
// making clones of the character
var runner1 = spawner.spawnCharacter({ name: "Ash", appearance: "green", position: { x: 10, y: 0 } });
var runner2 = spawner.spawnCharacter({ name: "Bob", appearance: "red", position: { x: 20, y: 0 } });
runner1.display();
runner2.display();
