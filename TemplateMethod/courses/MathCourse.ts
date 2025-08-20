import { OnlineCourse } from "../models/OnlineCourse";

// Concrete implementation for Math course
export class MathCourse extends OnlineCourse {
    protected provideMaterials(): void {
        console.log("Providing math textbooks.");
    }

    protected conductExam(): void {
        console.log("Conducting math exam.");
    }
}
