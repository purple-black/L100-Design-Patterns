"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateManager = void 0;
class GameStateManager {
    constructor() {
        this.state = 'paused';
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new GameStateManager();
        }
        return this.instance;
    }
    getState() {
        return this.state;
    }
    setState(newState) {
        this.state = newState;
    }
}
exports.GameStateManager = GameStateManager;
//# sourceMappingURL=GameStateManager.js.map