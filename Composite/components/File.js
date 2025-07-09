"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var File = /** @class */ (function () {
    function File(name, size) {
        this.name = name;
        this.size = size;
    }
    File.prototype.show = function (indent) {
        if (indent === void 0) { indent = ''; }
        console.log("".concat(indent, "- File: ").concat(this.name, " (").concat(this.size, " KB)"));
    };
    return File;
}());
exports.File = File;
