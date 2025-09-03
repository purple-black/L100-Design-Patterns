// the leaf node -> file which implements the FileSystemComponent
import { IFileSystemComponent } from "./FileSystemComponent";

export class File implements IFileSystemComponent {
    constructor(private name: string, private size: number) {}

    show(indent: string = ''): void {
        console.log(`${indent}- File: ${this.name} (${this.size} KB)`);
    }
}
