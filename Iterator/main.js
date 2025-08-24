"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client code using the Iterator Pattern
var Library_1 = require("./collection/Library");
var Book_1 = require("./model/Book");
var library = new Library_1.Library();
library.addBook(new Book_1.Book("Harry Potter", "J K Rowling"));
library.addBook(new Book_1.Book("Davinci Code", "Dan Brown"));
library.addBook(new Book_1.Book("Angels and Demons", "Dan Brown"));
var iterator = library.createIterator();
console.log("Iterating through library:");
while (iterator.hasNext()) {
    var book = iterator.next();
    console.log("\uD83D\uDCD6 ".concat(book.title, " by ").concat(book.author));
}
