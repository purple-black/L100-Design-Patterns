/*
It delays the instantiation of RealImage
It loads the resource only when needed, that is when display method is called, not when created
*/
import { IImage } from "../interfaces/Image";
import { RealImage } from "../real/RealImage";

export class ImageProxy implements IImage {
    private filename: string;
    private realImage: RealImage | null = null;

    constructor(filename: string) {
        this.filename = filename;
    }

    display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}
