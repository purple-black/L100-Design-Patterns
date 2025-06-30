"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateManager = void 0;
var GameStateManager = /** @class */ (function () {
    function GameStateManager() {
        this.state = 'paused';
    }
    GameStateManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new GameStateManager();
        }
        return this.instance;
    };
    GameStateManager.prototype.getState = function () {
        return this.state;
    };
    GameStateManager.prototype.setState = function (newState) {
        this.state = newState;
    };
    return GameStateManager;
}());
exports.GameStateManager = GameStateManager;
