"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProxy = void 0;
var RealImage_1 = require("../real/RealImage");
var ImageProxy = /** @class */ (function () {
    function ImageProxy(filename) {
        this.realImage = null;
        this.filename = filename;
    }
    ImageProxy.prototype.display = function () {
        if (this.realImage === null) {
            this.realImage = new RealImage_1.RealImage(this.filename);
        }
        this.realImage.display();
    };
    return ImageProxy;
}());
exports.ImageProxy = ImageProxy;
