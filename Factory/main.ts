/*
Client code that uses the character factory to create the characters with ther
name, health index, weapon and skillset
*/

import { CharacterFactory } from "./factories/CharacterFactory";

const gameCharacterType = "Archer";
// calling createCharacter method inside character factory.
// passing the type initiated above. and displaying using the 
// displayCharacteristics method inside each of the character classed
const character = CharacterFactory.createCharacter(gameCharacterType);
character.displayCharacteristics();