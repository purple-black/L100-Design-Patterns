import { TreeType } from "../models/TreeType";

// this tree factory creates the tree types which are the flyweight object what will be reused.
export class TreeFactory {
    // a map which has the key and its treetypes. all uniques ones stored here and is used for the reuse logic
    private static treeTypes: Map<string, TreeType> = new Map();

    public static getTreeType(name: string, color: string, texture: string): TreeType {
        const key = `${name}-${color}-${texture}`;
        // if this key is already present in the treeTypes map, return that itself
        // otherwise, create a new tree type and map it to the key. 
        if (!this.treeTypes.has(key)) {
        const newType = new TreeType(name, color, texture);
        this.treeTypes.set(key, newType);
        console.log(`Created new TreeType: ${key}`);
        }
        return this.treeTypes.get(key)!; // this cannot be undefined. retunring if already present in the map
    }

    // for getting the count of the number of existing treetypes
    public static getTreeTypesCount(): number {
        return this.treeTypes.size;
    }
}
