import { Tree } from "../models/Tree";
import { TreeFactory } from "../factory/TreeFactory";
export class Forest {
    constructor() {
        this.trees = [];
    }
    // gets the type from getTreeeType method of tree factory, 
    // then gives this to the new tree class
    plantTree(x, y, name, color, texture) {
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
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
