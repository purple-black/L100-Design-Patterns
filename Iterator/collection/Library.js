"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var BookIterator_1 = require("../iterator/BookIterator");
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.createIterator = function () {
        return new BookIterator_1.BookIterator(this.books);
    };
    return Library;
}());
exports.Library = Library;
