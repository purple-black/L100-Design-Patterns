"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSpawner = void 0;
//CharacterSpawner is the "client" that uses the prototype to create clones.
var CharacterSpawner = /** @class */ (function () {
    function CharacterSpawner(prototype) {
        this.prototype = prototype;
    }
    CharacterSpawner.prototype.spawnCharacter = function (options) {
        var clone = this.prototype.clone(); // cloning using the clone method of the prototype.
        if (options.name)
            clone.name = options.name;
        if (options.appearance)
            clone.appearance = options.appearance;
        if (options.position)
            clone.position = options.position;
        return clone;
    };
    return CharacterSpawner;
}());
exports.CharacterSpawner = CharacterSpawner;
