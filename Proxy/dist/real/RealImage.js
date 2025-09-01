"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealImage = void 0;
// realImage class which has the structure like the interace image and has the display method.
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }
    loadFromDisk() {
        console.log(`Loading image: ${this.filename}`);
    }
    display() {
        console.log(`Displaying image: ${this.filename}`);
    }
}
exports.RealImage = RealImage;
//# sourceMappingURL=RealImage.js.map