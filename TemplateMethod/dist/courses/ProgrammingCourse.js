"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammingCourse = void 0;
const OnlineCourse_1 = require("../models/OnlineCourse");
// Concrete implementation for Programming course
class ProgrammingCourse extends OnlineCourse_1.OnlineCourse {
    provideMaterials() {
        console.log("Providing programming tutorials and coding exercises.");
    }
    conductExam() {
        console.log("Conducting coding exam");
    }
}
exports.ProgrammingCourse = ProgrammingCourse;
//# sourceMappingURL=ProgrammingCourse.js.map