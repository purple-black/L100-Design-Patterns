"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
// Concrete Element: Text
class Text {
    constructor(content) {
        this.content = content;
    }
    accept(visitor) {
        visitor.visitText(this);
    }
}
exports.Text = Text;
//# sourceMappingURL=Text.js.map