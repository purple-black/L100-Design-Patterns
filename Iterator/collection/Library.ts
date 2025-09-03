// Concrete collection that holds books
import { IAggregate } from "./Aggregate";
import { IIterator } from "../iterator/Iterator";
import { Book } from "../model/Book";
import { BookIterator } from "../iterator/BookIterator";

export class Library implements IAggregate<Book> {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    createIterator(): IIterator<Book> {
        return new BookIterator(this.books);
    }
}
