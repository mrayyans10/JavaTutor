export type FinalProjectTask = {
  id: string;
  title: string;
  description: string;
  relatedConcepts: string[];
  relatedLessonId?: string;
};

export type FinalProjectStage = {
  id: string;
  title: string;
  summary: string;
  tasks: FinalProjectTask[];
};

/**
 * The final project is tracked separately from regular lessons because it is
 * a cumulative build rather than a single graded exercise. Progress is
 * stored as a checklist keyed by task id (see StudentProgress.finalProjectChecklist).
 */
export const finalProjectStages: FinalProjectStage[] = [
  {
    id: "stage-people",
    title: "Stage 1: People in the School",
    summary:
      "Model the people in the School Activity Management System using a shared Person parent class.",
    tasks: [
      {
        id: "task-person-class",
        title: "Create the Person class",
        description:
          "Add private fields for name and age, a constructor, getters, and an overridden displayInfo() method.",
        relatedConcepts: ["classes", "encapsulation", "overriding"],
        relatedLessonId: "module-5-classes-and-objects",
      },
      {
        id: "task-student-class",
        title: "Create the Student class",
        description:
          "Extend Person and add a grade field and a list of enrolled course codes. Override displayInfo().",
        relatedConcepts: ["inheritance", "overriding"],
        relatedLessonId: "module-5-inheritance",
      },
      {
        id: "task-teacher-class",
        title: "Create the Teacher class",
        description:
          "Extend Person and add a subjectTaught field and a list of courses taught. Override displayInfo().",
        relatedConcepts: ["inheritance", "overriding"],
        relatedLessonId: "module-5-overriding",
      },
    ],
  },
  {
    id: "stage-courses-clubs",
    title: "Stage 2: Courses and Clubs",
    summary: "Model the activities students can join.",
    tasks: [
      {
        id: "task-course-class",
        title: "Create the Course class",
        description:
          "Add a course code, course name, teacher, capacity, and a list of enrolled students.",
        relatedConcepts: ["classes", "collections"],
        relatedLessonId: "module-7-utility-packages",
      },
      {
        id: "task-club-class",
        title: "Create the Club class",
        description: "Add a club name, description, and a list of members.",
        relatedConcepts: ["classes", "collections"],
        relatedLessonId: "module-7-utility-packages",
      },
    ],
  },
  {
    id: "stage-registration",
    title: "Stage 3: Registration and Membership",
    summary: "Let students register for courses and join clubs, with validation.",
    tasks: [
      {
        id: "task-course-registration",
        title: "Implement course registration",
        description:
          "Write a method that registers a Student into a Course, rejecting the registration if the course is already full.",
        relatedConcepts: ["exception handling", "input validation"],
        relatedLessonId: "module-6-exception-handling",
      },
      {
        id: "task-club-membership",
        title: "Implement club membership",
        description: "Write a method that adds a Student to a Club's member list, avoiding duplicates.",
        relatedConcepts: ["collections", "conditions"],
        relatedLessonId: "module-2-conditions",
      },
    ],
  },
  {
    id: "stage-marks",
    title: "Stage 4: Marks and Grades",
    summary: "Track marks and calculate grades and averages.",
    tasks: [
      {
        id: "task-marks-storage",
        title: "Store marks for each student",
        description: "Use a HashMap<String, Integer> to map course codes to marks for each student.",
        relatedConcepts: ["HashMap", "collections"],
        relatedLessonId: "module-7-utility-packages",
      },
      {
        id: "task-grade-calculation",
        title: "Calculate grades and averages",
        description:
          "Write a method that converts a numeric mark into a letter grade, and another that calculates a student's average across all their marks.",
        relatedConcepts: ["methods", "arrays", "loops"],
        relatedLessonId: "module-4-methods",
      },
    ],
  },
  {
    id: "stage-search-validation",
    title: "Stage 5: Search and Validation",
    summary: "Make the system robust and searchable.",
    tasks: [
      {
        id: "task-search",
        title: "Implement search functionality",
        description:
          "Write a method that searches the list of students by name (case-insensitive) and returns any matches.",
        relatedConcepts: ["Strings", "ArrayList"],
        relatedLessonId: "module-3-strings",
      },
      {
        id: "task-validation",
        title: "Add input validation and exception handling",
        description:
          "Validate marks, ages, and menu choices, using try/catch and a custom exception where appropriate.",
        relatedConcepts: ["exception handling"],
        relatedLessonId: "module-6-exception-handling",
      },
    ],
  },
  {
    id: "stage-console",
    title: "Stage 6: Menu-Driven Console",
    summary: "Tie everything together with a text menu that a user can navigate.",
    tasks: [
      {
        id: "task-menu-loop",
        title: "Build the main menu loop",
        description:
          "Use a Scanner and a while loop to repeatedly show a menu (register student, register course, record marks, search, view reports, exit) until the user chooses to exit.",
        relatedConcepts: ["Scanner", "while loop", "switch"],
        relatedLessonId: "module-7-utility-packages",
      },
      {
        id: "task-reports",
        title: "Add a simple reports view",
        description: "Print a formatted list of all students with their grades and club memberships.",
        relatedConcepts: ["loops", "String formatting"],
        relatedLessonId: "module-3-strings",
      },
    ],
  },
];

export const allFinalProjectTasks: FinalProjectTask[] = finalProjectStages.flatMap((s) => s.tasks);
