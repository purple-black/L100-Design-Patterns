export class NumberExpression {
    constructor(value) {
        this.value = value;
    }
    interpret(_context) {
        return this.value;
    }
}
