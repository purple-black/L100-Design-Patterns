// Client code using the Iterator Pattern
import { Library } from "./collection/Library";
import { Book } from "./model/Book";

const library = new Library();
library.addBook(new Book("Harry Potter", "J K Rowling"));
library.addBook(new Book("Davinci Code", "Dan Brown"));
library.addBook(new Book("Angels and Demons", "Dan Brown"));

const iterator = library.createIterator();

console.log("Iterating through library:");
while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`${book.title} by ${book.author}`);
}
