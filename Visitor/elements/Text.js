"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
// Concrete Element: Text
var Text = /** @class */ (function () {
    function Text(content) {
        this.content = content;
    }
    Text.prototype.accept = function (visitor) {
        visitor.visitText(this);
    };
    return Text;
}());
exports.Text = Text;
