# JavaTutor

An AI-assisted Java learning platform for high-school students (ages 13-18), built with Next.js, TypeScript, React and Tailwind CSS.

Every lesson follows the same beginner-friendly flow: simple explanation → real-world analogy (built around a continuing **School Activity Management System** project) → worked Java example → common mistakes → a from-scratch coding exercise with starter-code placeholders → student submission → structured, hint-first evaluation → "what next?" follow-up options.

## Tech stack

- Next.js (App Router) + TypeScript + React
- Tailwind CSS v4 (with `@tailwindcss/typography` for lesson content)
- `react-markdown` + `remark-gfm` for rendering lesson/tutor markdown
- `react-syntax-highlighter` for Java syntax highlighting
- A server-side API route (`/api/tutor`) proxies AI requests so the API key never reaches the browser
- `openai` SDK, used only if `OPENAI_API_KEY` is configured; otherwise the app falls back to a built-in rule-based evaluator and scripted tutor replies, so the whole product works with **zero external dependencies**
- Progress is stored in the browser's local storage behind a `ProgressRepository` interface, so a real database-backed implementation can be swapped in later without touching any component

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To enable real AI-powered tutoring and code evaluation, copy `.env.example` to `.env.local` and set `OPENAI_API_KEY` (and optionally `AI_MODEL`). Without a key, the app still works fully using its built-in mock evaluator and canned tutor responses.

## Project structure

```
src/
  app/                      Routes (App Router)
    page.tsx                Landing page
    course/page.tsx          Course overview + module list
    course/[lessonId]/       Lesson viewer page
    quiz/[quizId]/            Quiz page
    dashboard/                Student progress dashboard
    final-project/            Final "School Activity Management System" build checklist
    api/tutor/route.ts        Server-side AI proxy (evaluation + tutor chat)
  components/
    layout/AppShell.tsx       Top navigation + overall progress bar
    course/                   CourseSidebar, LessonViewer, ConceptExplanation,
                               JavaCodeBlock, ExercisePanel, SubmissionEditor,
                               EvaluationPanel, NextActionButtons, CourseLayout
    tutor/TutorChat.tsx        Tutor chat widget
    dashboard/ProgressDashboard.tsx
    quiz/QuizPanel.tsx
  data/                      Course content, kept separate from UI components
    types.ts                 Lesson / Exercise / Quiz / Progress / Evaluation types
    modules/module1.ts ... module8.ts
    course.ts                 Aggregation + helpers (getLesson, getNextLesson, ...)
    quizzes.ts
    finalProject.ts
  lib/
    progress/                 ProgressRepository (local storage today, DB-ready interface)
                               + ProgressContext (React context/hook)
    evaluation/                Rule-based mock evaluator (used when no AI key is set)
    ai/                        Prompt building + server-only OpenAI client
    tutor/                     Follow-up action definitions + chat hook
```

## Curriculum & MVP scope

The full 8-module curriculum from the product spec exists as data (`src/data/modules`), with every topic represented as either a fully authored `Lesson` or a `PlaceholderLesson` (shown in the sidebar as "Soon"). The 16 lessons required for the MVP are fully implemented end-to-end:

Structure of a Java program, Variables, Data types, Strings, Conditions, For loops, While loops, Arrays, Methods, Classes and objects, Access modifiers, Inheritance, Method overloading, Method overriding, Exception handling, Java utility packages.

Five quizzes (multiple-choice, predict-the-output, find-the-error, and one coding question each) are placed after every 3-4 lessons.

## Adding a real Java compiler later

The submission flow (`SubmissionEditor` → `ExercisePanel` → `POST /api/tutor`) is deliberately decoupled from *how* code is evaluated. To add a real compiler/execution service later:

1. Add a new server-side module under `src/lib/execution/` that runs code against a compiler API.
2. In `src/app/api/tutor/route.ts`, call it before (or instead of) the AI/mock evaluator, and merge its pass/fail + stdout/stderr into the `EvaluationResult`.

No component or data-model changes are required.
