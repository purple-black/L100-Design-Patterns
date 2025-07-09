"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
var Directory = /** @class */ (function () {
    function Directory(name) {
        this.name = name;
        this.children = [];
    }
    Directory.prototype.add = function (component) {
        this.children.push(component);
    };
    Directory.prototype.remove = function (component) {
        this.children = this.children.filter(function (child) { return child !== component; });
    };
    Directory.prototype.show = function (indent) {
        if (indent === void 0) { indent = ''; }
        console.log("".concat(indent, "+ Directory: ").concat(this.name));
        this.children.forEach(function (child) { return child.show(indent + '  '); });
    };
    return Directory;
}());
exports.Directory = Directory;
