"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
class Directory {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    add(component) {
        this.children.push(component);
    }
    remove(component) {
        this.children = this.children.filter(child => child !== component);
    }
    show(indent = '') {
        console.log(`${indent}+ Directory: ${this.name}`);
        this.children.forEach(child => child.show(indent + '  '));
    }
}
exports.Directory = Directory;
//# sourceMappingURL=Directory.js.map