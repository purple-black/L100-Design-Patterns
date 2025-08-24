"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookIterator = void 0;
var BookIterator = /** @class */ (function () {
    function BookIterator(books) {
        this.books = books;
        this.index = 0;
    }
    BookIterator.prototype.hasNext = function () {
        return this.index < this.books.length;
    };
    BookIterator.prototype.next = function () {
        return this.books[this.index++];
    };
    return BookIterator;
}());
exports.BookIterator = BookIterator;
