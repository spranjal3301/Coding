//`Singleton pattern :
//* Completely prevent any developer from ever creating a new instance of the GameManager class
//* use Static attributes for Single instance
//* Single Instance of GameManager class
//- Step 1: Create a Make Constructor Private (this prevents instantiation from outside the class)
//- Step 2: Create a Static Instance of the Class inSide the Class
//- Step 3: Create a Static Method to Access the Instance of the Class

export class GameManager {
    private static instance: GameManager; // Create a static instance of the class
    private games = [];

    private constructor() {
        //? Private constructor ensures that a new instance cannot be created from outside
    }

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
     //?... other methods
}

// Usage GameManager.getInstance().addGame()