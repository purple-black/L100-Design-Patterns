"use strict";
// Abstract class that defines the template method and common steps
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse() {
    }
    // Template Method (final algorithm structure)
    OnlineCourse.prototype.takeCourse = function () {
        this.enroll();
        this.provideMaterials(); // defnied in subclass
        this.conductExam(); // defined in subclass
        this.provideCertificate();
    };
    // Common step (shared by all subclasses)
    OnlineCourse.prototype.enroll = function () {
        console.log("Student enrolled in the course.");
    };
    // Common step
    OnlineCourse.prototype.provideCertificate = function () {
        console.log("Certificate provided upon completion.");
    };
    return OnlineCourse;
}());
exports.OnlineCourse = OnlineCourse;
