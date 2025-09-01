"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCourse = void 0;
const OnlineCourse_1 = require("../models/OnlineCourse");
// Concrete implementation for Math course
class MathCourse extends OnlineCourse_1.OnlineCourse {
    provideMaterials() {
        console.log("Providing math textbooks.");
    }
    conductExam() {
        console.log("Conducting math exam.");
    }
}
exports.MathCourse = MathCourse;
//# sourceMappingURL=MathCourse.js.map