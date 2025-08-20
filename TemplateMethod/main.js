"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathCourse_1 = require("./courses/MathCourse");
var ProgrammingCourse_1 = require("./courses/ProgrammingCourse");
// Client code using the Template Method pattern
console.log("for maths course");
var mathCourse = new MathCourse_1.MathCourse();
mathCourse.takeCourse();
console.log("********************");
console.log("for programming course");
var programmingCourse = new ProgrammingCourse_1.ProgrammingCourse();
programmingCourse.takeCourse();
