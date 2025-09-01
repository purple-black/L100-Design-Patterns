"use strict";
// Abstract class that defines the template method and common steps
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
class OnlineCourse {
    // Template Method (final algorithm structure)
    takeCourse() {
        this.enroll();
        this.provideMaterials(); // defnied in subclass
        this.conductExam(); // defined in subclass
        this.provideCertificate();
    }
    // Common step (shared by all subclasses)
    enroll() {
        console.log("Student enrolled in the course.");
    }
    // Common step
    provideCertificate() {
        console.log("Certificate provided upon completion.");
    }
}
exports.OnlineCourse = OnlineCourse;
//# sourceMappingURL=OnlineCourse.js.map