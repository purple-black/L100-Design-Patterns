"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Forest_1 = require("./client/Forest");
const TreeFactory_1 = require("./factory/TreeFactory");
const forest = new Forest_1.Forest();
// Plant 3 pine trees and 3 oaks
for (let i = 0; i < 3; i++) {
    forest.plantTree(Math.random() * 1000, Math.random() * 1000, "Pine", "Green", "Rough");
    forest.plantTree(Math.random() * 1000, Math.random() * 1000, "Oak", "Dark Green", "Smooth");
}
forest.draw();
console.log(`Total tree objects created: ${forest.treeCount()}`);
console.log(`Unique tree types (shared): ${TreeFactory_1.TreeFactory.getTreeTypesCount()}`);
// to run:
// tsc main.ts --target ES2015 --lib ES2015,DOM
// node dist/main.js
//# sourceMappingURL=main.js.map