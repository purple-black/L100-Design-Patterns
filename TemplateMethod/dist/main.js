"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathCourse_1 = require("./courses/MathCourse");
const ProgrammingCourse_1 = require("./courses/ProgrammingCourse");
// Client code using the Template Method pattern
console.log("for maths course");
const mathCourse = new MathCourse_1.MathCourse();
mathCourse.takeCourse();
console.log("********************");
console.log("for programming course");
const programmingCourse = new ProgrammingCourse_1.ProgrammingCourse();
programmingCourse.takeCourse();
//# sourceMappingURL=main.js.map