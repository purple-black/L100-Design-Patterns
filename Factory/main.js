"use strict";
/*
Client code that uses the character factory to create the characters with ther
name, health index, weapon and skillset
*/
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterFactory_1 = require("./factories/CharacterFactory");
var gameCharacterType = "Archer";
// calling createCharacter method inside character factory.
// passing the type initiated above. and displaying using the 
// displayCharacteristics method inside each of the character classed
var character = CharacterFactory_1.CharacterFactory.createCharacter(gameCharacterType);
character.displayCharacteristics();
