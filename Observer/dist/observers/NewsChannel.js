"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsChannel = void 0;
class NewsChannel {
    constructor(name) {
        this.channelName = name;
    }
    update(news) {
        console.log(`${this.channelName} received news: ${news}`);
    }
}
exports.NewsChannel = NewsChannel;
//# sourceMappingURL=NewsChannel.js.map