"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
// Concrete Element: Table
var Table = /** @class */ (function () {
    function Table(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    }
    Table.prototype.accept = function (visitor) {
        visitor.visitTable(this);
    };
    return Table;
}());
exports.Table = Table;
