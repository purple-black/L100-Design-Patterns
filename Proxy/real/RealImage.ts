import { Image } from "../interfaces/Image";

// realImage class which has the structure like the interace image and has the display method.
export class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Loading image: ${this.filename}`);
    }

    display(): void {
        console.log(`Displaying image: ${this.filename}`);
    }
}
