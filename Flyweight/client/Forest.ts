import { Tree } from "../models/Tree";
import { TreeFactory } from "../factory/TreeFactory";

export class Forest {
    private trees: Tree[] = [];

    // gets the type from getTreeeType method of tree factory, 
    // then gives this to the new tree class
    public plantTree(x: number, y: number, name: string, color: string, texture: string): void {
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    public draw(): void {
        for (const tree of this.trees) {
        tree.draw(); // calls the draw method in the tree class.
        }
    }

    public treeCount(): number {
        return this.trees.length;
    }
}
