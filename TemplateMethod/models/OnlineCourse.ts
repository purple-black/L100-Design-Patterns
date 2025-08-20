// Abstract class that defines the template method and common steps

export abstract class OnlineCourse {
    // Template Method (final algorithm structure)
    public takeCourse(): void {
        this.enroll();
        this.provideMaterials(); // defnied in subclass
        this.conductExam();      // defined in subclass
        this.provideCertificate();
    }

    // Common step (shared by all subclasses)
    private enroll(): void {
        console.log("Student enrolled in the course.");
    }

    // Abstract steps (implemented by subclasses)
    protected abstract provideMaterials(): void;
    protected abstract conductExam(): void;

    // Common step
    private provideCertificate(): void {
        console.log("Certificate provided upon completion.");
    }
}
