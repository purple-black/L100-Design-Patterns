"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is the client code.
const File_1 = require("./components/File");
const Directory_1 = require("./components/Directory");
// Create files -> files are the leaf nodes - meaning they wont have child nodes.
const file1 = new File_1.File("resume.pdf", 120);
const file2 = new File_1.File("photo.jpg", 300);
const file3 = new File_1.File("song.mp3", 5000);
const file4 = new File_1.File("notes.txt", 10);
// Create directories -> these rae the composite nodes which can have child nodes, 
// either file or sub directries
const documents = new Directory_1.Directory("Documents");
documents.add(file1);
documents.add(file4); // adding leaf nodes -> files
const pictures = new Directory_1.Directory("Pictures");
pictures.add(file2); // adding leaf nodes -> files
const music = new Directory_1.Directory("Music");
music.add(file3); // adding leaf nodes -> files
// Create root directory
const home = new Directory_1.Directory("Home"); // this is the root directory 
home.add(documents);
home.add(pictures);
home.add(music); // adding composite nodes (sub directories) to the root node -> home directory
home.show();
/**
 * with out using Composite pattern - should handle all the nodes seperately
 * will not use the FileSystemComponent
 */
// class File {
//     constructor(private name: string, private size: number) {}
//     show(indent: string = ''): void {
//         console.log(`${indent}- File: ${this.name} (${this.size} KB)`);
//     }
// }
// class Directory {
//     private files: File[] = [];
//     private subdirectories: Directory[] = [];
//     constructor(private name: string) {}
//     addFile(file: File): void {
//         this.files.push(file);
//     }
//     addDirectory(directory: Directory): void {
//         this.subdirectories.push(directory);
//     }
//     show(indent: string = ''): void {
//         console.log(`${indent}+ Directory: ${this.name}`);
//         this.files.forEach(file => file.show(indent + '  '));
//         this.subdirectories.forEach(dir => dir.show(indent + '  '));
//     }
// }
// // //////// main code ////////////
// // Create files
// const file1 = new File("resume.pdf", 120);
// const file2 = new File("photo.jpg", 300);
// const file3 = new File("song.mp3", 5000);
// const file4 = new File("notes.txt", 10);
// // Create directories and add files
// const documents = new Directory("Documents");
// documents.addFile(file1);
// documents.addFile(file4);
// const pictures = new Directory("Pictures");
// pictures.addFile(file2);
// const music = new Directory("Music");
// music.addFile(file3);
// // Create root directory and add subdirectories
// const home = new Directory("Home");
// home.addDirectory(documents);
// home.addDirectory(pictures);
// home.addDirectory(music);
// // Display the entire file structure
// home.show();
//# sourceMappingURL=main.js.map