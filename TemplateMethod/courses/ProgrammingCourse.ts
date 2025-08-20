import { OnlineCourse } from "../models/OnlineCourse";

// Concrete implementation for Programming course
export class ProgrammingCourse extends OnlineCourse {
    protected provideMaterials(): void {
        console.log("Providing programming tutorials and coding exercises.");
    }

    protected conductExam(): void {
        console.log("Conducting coding exam");
    }
}
