"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSpawner = void 0;
//CharacterSpawner is the "client" that uses the prototype to create clones.
class CharacterSpawner {
    constructor(prototype) {
        this.prototype = prototype;
    }
    spawnCharacter(options) {
        const clone = this.prototype.clone(); // cloning using the clone method of the prototype.
        if (options.name)
            clone.name = options.name;
        if (options.appearance)
            clone.appearance = options.appearance;
        if (options.position)
            clone.position = options.position;
        return clone;
    }
}
exports.CharacterSpawner = CharacterSpawner;
//# sourceMappingURL=CharacterSpawner.js.map