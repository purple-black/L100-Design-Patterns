"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookIterator = void 0;
class BookIterator {
    constructor(books) {
        this.books = books;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.books.length;
    }
    next() {
        return this.books[this.index++];
    }
}
exports.BookIterator = BookIterator;
//# sourceMappingURL=BookIterator.js.map