/**
 * Core content types for the JavaTutor course.
 *
 * Course content is intentionally kept separate from UI components so that
 * lessons, quizzes and the final project can evolve (or move into a
 * database) without touching any React code.
 */

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type Exercise = {
  id: string;
  title: string;
  instructions: string;
  starterCode: string;
  expectedBehaviour: string;
  conceptsTested: string[];
  difficulty: Difficulty;
};

/** A fully authored, interactive lesson. */
export type Lesson = {
  id: string;
  moduleId: string;
  order: number;
  title: string;
  /** What the student should be able to do after finishing the lesson. */
  objective: string;
  /** Markdown: what it is, why it is needed, when it is used. */
  explanation: string;
  /** Markdown: a short real-world analogy for high-school students. */
  analogy: string;
  /** Markdown: the basic Java syntax pattern for the concept. */
  syntax: string;
  /** A complete, runnable Java example. */
  exampleCode: string;
  /** Line-by-line / block-by-block explanation of the example. */
  exampleExplanation: string[];
  /** 2-5 common beginner mistakes. */
  commonMistakes: string[];
  exercise: Exercise;
  /** Suggested quick-reply prompts shown after the lesson content. */
  followUpPrompts: string[];
  comingSoon?: false;
};

/** A placeholder for curriculum topics not yet fully authored in this MVP. */
export type PlaceholderLesson = {
  id: string;
  moduleId: string;
  order: number;
  title: string;
  comingSoon: true;
  /** Optional note, e.g. "Covered together with Method Overriding". */
  note?: string;
};

export type CourseLesson = Lesson | PlaceholderLesson;

export function isFullLesson(lesson: CourseLesson): lesson is Lesson {
  return lesson.comingSoon !== true;
}

export type CourseModule = {
  id: string;
  order: number;
  title: string;
  description: string;
  lessons: CourseLesson[];
};

/* ---------------------------------- Quiz --------------------------------- */

export type MultipleChoiceQuestion = {
  id: string;
  type: "multiple-choice";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type PredictOutputQuestion = {
  id: string;
  type: "predict-output";
  prompt: string;
  code: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type FindErrorQuestion = {
  id: string;
  type: "find-error";
  prompt: string;
  code: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type CodingQuestion = {
  id: string;
  type: "coding";
  prompt: string;
  starterCode: string;
  sampleSolution: string;
  expectedBehaviour: string;
};

export type QuizQuestion =
  | MultipleChoiceQuestion
  | PredictOutputQuestion
  | FindErrorQuestion
  | CodingQuestion;

export type Quiz = {
  id: string;
  title: string;
  moduleId: string;
  /** Lessons a student should complete before attempting this quiz. */
  coversLessonIds: string[];
  /** Where to send the student if they struggle with the quiz overall. */
  relatedLessonId: string;
  questions: QuizQuestion[];
};

/* -------------------------------- Progress -------------------------------- */

export type ExerciseAttempt = {
  exerciseId: string;
  lessonId: string;
  submittedCode: string;
  timestamp: string;
  passed: boolean;
  feedbackSummary?: string;
};

export type QuizAnswer = {
  questionId: string;
  selectedIndex?: number;
  code?: string;
  correct: boolean;
};

export type QuizResult = {
  quizId: string;
  score: number;
  total: number;
  timestamp: string;
  missedQuestionIds: string[];
};

export type StudentProgress = {
  currentLessonId: string | null;
  completedLessonIds: string[];
  exerciseAttempts: ExerciseAttempt[];
  exerciseCompletion: Record<string, boolean>;
  topicsToReview: string[];
  commonErrors: Record<string, number>;
  quizResults: QuizResult[];
  finalProjectChecklist: Record<string, boolean>;
  lastVisited: string | null;
};

/* ------------------------------- Evaluation ------------------------------- */

export type ErrorCategory = "syntax" | "runtime" | "logical" | "none";

export type EvaluationResult = {
  attemptedConcept: boolean;
  correctness: "correct" | "partially-correct" | "incorrect";
  whatYouDidCorrectly: string[];
  whatNeedsImprovement: string[];
  firstHint?: string;
  secondHint?: string;
  conceptToReview: string;
  suggestedNextAction: string;
  errorType: ErrorCategory;
  source: "mock" | "ai";
};

export type TutorChatMessage = {
  id: string;
  role: "student" | "tutor";
  content: string;
  timestamp: string;
};
