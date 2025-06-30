// defining the type of GameState; only three valid gamestate to be used.
type GameState = "playing" | "paused" | "gameover"; 

class GameStateManager {
    private static instance: GameStateManager;
    private state: GameState;

    private constructor() {
        this.state = 'paused';
    }

    public static getInstance(): GameStateManager{
        if (!this.instance) {
            this.instance = new GameStateManager();
        }
        return this.instance;
    }

    public getState(): GameState {
        return this.state;
    }

    public setState(newState: GameState): void{
        this.state = newState;
    }
}

export {GameStateManager};
