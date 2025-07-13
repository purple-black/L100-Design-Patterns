"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forest = void 0;
const Tree_1 = require("../models/Tree");
const TreeFactory_1 = require("../factory/TreeFactory");
class Forest {
    constructor() {
        this.trees = [];
    }
    // gets the type from getTreeeType method of tree factory, 
    // then gives this to the new tree class
    plantTree(x, y, name, color, texture) {
        const type = TreeFactory_1.TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree_1.Tree(x, y, type);
        this.trees.push(tree);
    }
    draw() {
        for (const tree of this.trees) {
            tree.draw(); // calls the draw method in the tree class.
        }
    }
    treeCount() {
        return this.trees.length;
    }
}
exports.Forest = Forest;
