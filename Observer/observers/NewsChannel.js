"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsChannel = void 0;
var NewsChannel = /** @class */ (function () {
    function NewsChannel(name) {
        this.channelName = name;
    }
    NewsChannel.prototype.update = function (news) {
        console.log("".concat(this.channelName, " received news: ").concat(news));
    };
    return NewsChannel;
}());
exports.NewsChannel = NewsChannel;
