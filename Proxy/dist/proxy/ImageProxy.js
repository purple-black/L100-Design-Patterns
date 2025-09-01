"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProxy = void 0;
const RealImage_1 = require("../real/RealImage");
class ImageProxy {
    constructor(filename) {
        this.realImage = null;
        this.filename = filename;
    }
    display() {
        if (this.realImage === null) {
            this.realImage = new RealImage_1.RealImage(this.filename);
        }
        this.realImage.display();
    }
}
exports.ImageProxy = ImageProxy;
//# sourceMappingURL=ImageProxy.js.map