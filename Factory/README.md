Factory Design Pattern – Game Character Example

This project demonstrates the **Factory Design Pattern** in TypeScript using a simple game character creation example.  

Factory Creational Design Pattern:

The **Factory Pattern** is a **creational design pattern** that provides a centralized way to create objects without exposing the instantiation logic to the client.  

Instead of creating objects directly with `new`, the client delegates this responsibility to a **factory class**, which decides which concrete implementation to return.

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

Concrete Classes

Each character (Warrior, Mage, Archer) implements the GameCharacter interface:
