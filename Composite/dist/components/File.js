"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    show(indent = '') {
        console.log(`${indent}- File: ${this.name} (${this.size} KB)`);
    }
}
exports.File = File;
//# sourceMappingURL=File.js.map