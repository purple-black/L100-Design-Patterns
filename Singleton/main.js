"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameStateManager_1 = require("./GameStateManager");
var gameStateManager1 = GameStateManager_1.GameStateManager.getInstance();
gameStateManager1.setState('playing');
console.log("Current game state: ", gameStateManager1.getState());
var gameStateManager2 = GameStateManager_1.GameStateManager.getInstance();
console.log("Current game state: ", gameStateManager2.getState());
console.log("Is gameStateManager1 and gameStateManager2 ? ");
if (gameStateManager1 == gameStateManager2)
    console.log("true");
else
    console.log("false");
