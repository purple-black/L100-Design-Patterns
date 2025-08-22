import { Level1Handler } from "./handlers/Level1Handler";
import { Level2Handler } from "./handlers/Level2Handler";
import { Level3Handler } from "./handlers/Level3Handler";

// Build the chain
const level1 = new Level1Handler();
const level2 = new Level2Handler();
const level3 = new Level3Handler();

level1.setNext(level2).setNext(level3);

// Client requests
console.log("---- Request for Level 1 issue ----");
level1.handleRequest(1);

console.log("\n---- Request for Level 2 issue ----");
level1.handleRequest(2);

console.log("\n---- Request for Level 3 issue ----");
level1.handleRequest(3);

console.log("\n---- Request for unsupported Level 4 issue ----");
level1.handleRequest(4);
