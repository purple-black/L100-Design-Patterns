"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const BookIterator_1 = require("../iterator/BookIterator");
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    createIterator() {
        return new BookIterator_1.BookIterator(this.books);
    }
}
exports.Library = Library;
//# sourceMappingURL=Library.js.map