// Concrete collection that holds books
import { Aggregate } from "./Aggregate";
import { Iterator } from "../iterator/Iterator";
import { Book } from "../model/Book";
import { BookIterator } from "../iterator/BookIterator";

export class Library implements Aggregate<Book> {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    createIterator(): Iterator<Book> {
        return new BookIterator(this.books);
    }
}
