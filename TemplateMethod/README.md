# Template Method Design Pattern

##  Overview
The **Template Method Pattern** defines the **skeleton of an algorithm** in an abstract class and allows subclasses to **override specific steps** without changing the overall algorithm structure.

This folder demonstrates the Template Method Pattern using an **online course system** where different courses (Math, Programming) follow the same workflow but differ in the materials provided and type of exams.

---

##  How to Run

Clone the repo:

```
git clone https://github.com/purple-black/L100-Design-Patterns.git
cd TemplateMethod
```

Install TypeScript:

```
npm install -g typescript
```

Open terminal and enter:
Compile TypeScript and then run the compiled javascript file

```
tsc main.ts
node main.js
```

---

## How It Works

### 1. **Abstract Class (`OnlineCourse.ts`)**
- Defines the **Template Method** `takeCourse()` → fixed sequence of steps:
  1. `enroll()` → same for all courses.
  2. `provideMaterials()` → implemented by subclass.
  3. `conductExam()` → implemented by subclass.
  4. `provideCertificate()` → same for all courses.

- Common steps are implemented in the abstract class.
- Variable steps are left **abstract** for subclasses.

---

### 2. **Concrete Subclasses**
- **MathCourse.ts**
  - Provides math textbooks.
  - Conducts a math exam.
- **ProgrammingCourse.ts**
  - Provides coding tutorials and exercises.
  - Conducts coding exam.

Each subclass **customizes** the variable steps but **inherits** the workflow.

---

### 3. **Client (`main.ts`)**
- Creates course objects (`MathCourse`, `ProgrammingCourse`).
- Calls the **template method** `takeCourse()`.
- Ensures the workflow always follows the same sequence.

---





