Factory Design Pattern – Game Character Example

This project demonstrates the **Factory Design Pattern** in TypeScript using a simple game character creation example.  

Factory Creational Design Pattern:

The **Factory Pattern** is a **creational design pattern** that provides a centralized way to create objects without exposing the instantiation logic to the client.  

Instead of creating objects directly with `new`, the client delegates this responsibility to a **factory class**, which decides which concrete implementation to return.


##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd Factory
```

Install TypeScript:

```
npm install -g typescript
```

Open terminal and enter:
Compile TypeScript and then run the compiled javascript file

```
tsc main.ts
node main.js
```

##  How it Works

### 1. **GameCharacter Interface**
Defines the contract for all characters:
```ts
export interface GameCharacter {
    name: string;
    health: number;
    weapon: string;
    specialSkill: string;
    displayCharacteristics(): void;
}
```
2. Concrete Classes

Each character (Warrior, Mage, Archer) implements the GameCharacter interface:

```ts
export class Mage implements GameCharacter {
    name = "Mage";
    health = 100;
    weapon = "Staff";
    specialSkill = "Fireball";
    
    displayCharacteristics(): void {
        console.log(`${this.name}: Health=${this.health}, Weapon=${this.weapon}, Skill=${this.specialSkill}`);
    }
}
```

3. Factory Class

Encapsulates the creation logic:

```ts
export class CharacterFactory {
    static createCharacter(type: string): GameCharacter {
        switch (type.toLowerCase()) {
            case "warrior": return new Warrior();
            case "mage": return new Mage();
            case "archer": return new Archer();
            default: throw new Error("Oops!!! Character not found!!!");
        }
    }
}
```

4. Client Code

The client (main.ts) simply asks the factory for a character:

```ts
const gameCharacterType = "mage";
const character = CharacterFactory.createCharacter(gameCharacterType);
character.displayCharacteristics();
```

## Use of factory design pattern:

Encapsulation of Object Creation → The client doesn’t directly use new.

Flexibility → Adding a new character (e.g., Assassin) requires only updating the factory, not client code.

Polymorphism → Factory always returns something that implements GameCharacter.

Loose Coupling → Client depends only on the GameCharacter interface.


## Without Factory Pattern

If we don’t use the factory, the client would need to handle instantiation logic itself:

```ts
let character: GameCharacter;
switch (gameCharacterType.toLowerCase()) {
    case "warrior": character = new Warrior(); break;
    case "mage": character = new Mage(); break;
    case "archer": character = new Archer(); break;
    default: throw new Error("Oops!!! Character not found!!!");
}
character.displayCharacteristics();
```

## Problems in the above code without factory:

Tight coupling → Client must know about all classes.

Code duplication across different clients.

Violates Open/Closed Principle → Adding new types forces client changes.

