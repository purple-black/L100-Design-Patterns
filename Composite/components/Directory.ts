// the composite node -> directories which also implements the FileSystemComponent
import { IFileSystemComponent } from "./FileSystemComponent";

export class Directory implements IFileSystemComponent {
    private children: IFileSystemComponent[] = [];

    constructor(private name: string) {}

    add(component: IFileSystemComponent): void {
        this.children.push(component);
    }

    remove(component: IFileSystemComponent): void {
        this.children = this.children.filter(child => child !== component);
    }

    show(indent: string = ''): void {
        console.log(`${indent}+ Directory: ${this.name}`);
        this.children.forEach(child => child.show(indent + '  '));
    }
}
