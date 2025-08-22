"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsAgency = void 0;
var NewsAgency = /** @class */ (function () {
    function NewsAgency() {
        this.observers = [];
        this.news = "";
    }
    NewsAgency.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    NewsAgency.prototype.detach = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    NewsAgency.prototype.setNews = function (news) {
        this.news = news;
        this.notify(); // Notify all observers when state changes
    };
    NewsAgency.prototype.getNews = function () {
        return this.news;
    };
    NewsAgency.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.news);
        }
    };
    return NewsAgency;
}());
exports.NewsAgency = NewsAgency;
