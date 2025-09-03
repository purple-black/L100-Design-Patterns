"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client code using the Iterator Pattern
const Library_1 = require("./collection/Library");
const Book_1 = require("./model/Book");
const library = new Library_1.Library();
library.addBook(new Book_1.Book("Harry Potter", "J K Rowling"));
library.addBook(new Book_1.Book("Davinci Code", "Dan Brown"));
library.addBook(new Book_1.Book("Angels and Demons", "Dan Brown"));
const iterator = library.createIterator();
console.log("Iterating through library:");
while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`${book.title} by ${book.author}`);
}
//# sourceMappingURL=main.js.map