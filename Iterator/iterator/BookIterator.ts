// Concrete Iterator for traversing books
import { IIterator } from "./Iterator";
import { Book } from "../model/Book";

export class BookIterator implements IIterator<Book> {
    private index: number = 0;

    constructor(private books: Book[]) {}

    hasNext(): boolean {
        return this.index < this.books.length;
    }

    next(): Book {
        return this.books[this.index++];
    }
}
