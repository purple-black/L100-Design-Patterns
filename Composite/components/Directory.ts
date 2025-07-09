// the composite node -> directories which also implements the FileSystemComponent
import { FileSystemComponent } from "./FileSystemComponent";

export class Directory implements FileSystemComponent {
    private children: FileSystemComponent[] = [];

    constructor(private name: string) {}

    add(component: FileSystemComponent): void {
        this.children.push(component);
    }

    remove(component: FileSystemComponent): void {
        this.children = this.children.filter(child => child !== component);
    }

    show(indent: string = ''): void {
        console.log(`${indent}+ Directory: ${this.name}`);
        this.children.forEach(child => child.show(indent + '  '));
    }
}
