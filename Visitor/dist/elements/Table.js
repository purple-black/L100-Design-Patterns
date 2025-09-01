"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
// Concrete Element: Table
class Table {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    }
    accept(visitor) {
        visitor.visitTable(this);
    }
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map