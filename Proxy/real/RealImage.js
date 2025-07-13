"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealImage = void 0;
// realImage class which has the structure like the interace image and has the display method.
var RealImage = /** @class */ (function () {
    function RealImage(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }
    RealImage.prototype.loadFromDisk = function () {
        console.log("Loading image: ".concat(this.filename));
    };
    RealImage.prototype.display = function () {
        console.log("Displaying image: ".concat(this.filename));
    };
    return RealImage;
}());
exports.RealImage = RealImage;
