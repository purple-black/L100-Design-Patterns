import { Forest } from "./client/Forest";
import { TreeFactory } from "./factory/TreeFactory";
const forest = new Forest();
// Plant 5,000 pine trees and 5,000 oaks
for (let i = 0; i < 5000; i++) {
    forest.plantTree(Math.random() * 1000, Math.random() * 1000, "Pine", "Green", "Rough");
    forest.plantTree(Math.random() * 1000, Math.random() * 1000, "Oak", "Dark Green", "Smooth");
}
forest.draw();
console.log(`Total tree objects created: ${forest.treeCount()}`);
console.log(`Unique tree types (shared): ${TreeFactory.getTreeTypesCount()}`);
// to run:
// tsc main.ts --target ES2015 --lib ES2015,DOM
// node dist/main.js
