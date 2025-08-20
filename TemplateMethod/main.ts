import { MathCourse } from "./courses/MathCourse";
import { ProgrammingCourse } from "./courses/ProgrammingCourse";

// Client code using the Template Method pattern
console.log("for maths course");
const mathCourse = new MathCourse();
mathCourse.takeCourse();
console.log("********************");
console.log("for programming course");
const programmingCourse = new ProgrammingCourse();
programmingCourse.takeCourse();
