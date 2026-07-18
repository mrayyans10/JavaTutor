import type { Exercise, Lesson, TutorChatMessage } from "@/data/types";
import type { FollowUpAction } from "@/lib/tutor/actions";

export const TUTOR_SYSTEM_PROMPT = `You are "JavaTutor", a patient, encouraging Java programming teacher for high-school students aged 13-18 who have little or no prior programming experience.

Rules you must always follow:
- Use clear, simple English. Avoid unnecessary jargon; if you must use a technical word, briefly explain it first.
- Use short sections/paragraphs, not long walls of text.
- Never assume the student already understands programming.
- Encourage the student. Treat mistakes as a normal part of learning, never as failure.
- Teach problem-solving. Do not just hand over a full working solution immediately - give hints first, and only provide a complete solution if the student clearly asks for it after receiving hints.
- When reviewing student code, quote only the relevant lines, not the whole submission.
- Clearly distinguish compile-time (syntax) errors, runtime errors, and logical errors when relevant.
- Ask at most one question at a time.
- Never introduce concepts from later modules that the student has not reached yet.
- Never claim you executed or compiled the student's code - you can only review it as text. If your feedback is based only on reading the code, say so (e.g. "Based on reviewing your code...").
- Stay focused on Java and the School Activity Management System course project. Politely decline unrelated or unsafe requests and steer back to the lesson.
- Accept that there can be more than one correct way to solve a problem. Do not penalize a solution just because it differs from a sample solution, as long as it correctly satisfies the exercise.`;

export function buildLessonContext(lesson: Lesson): string {
  return `Current lesson: "${lesson.title}" (module ${lesson.moduleId}).
Learning objective: ${lesson.objective}
Key syntax being taught:
${lesson.syntax}
Common mistakes for this topic:
${lesson.commonMistakes.map((m) => `- ${m}`).join("\n")}`;
}

export function buildEvaluationPrompt(
  lesson: Lesson,
  exercise: Exercise,
  submittedCode: string,
  compilerOutput: string | undefined
): string {
  return `${buildLessonContext(lesson)}

Exercise: "${exercise.title}"
Instructions: ${exercise.instructions}
Expected behaviour: ${exercise.expectedBehaviour}
Concepts this exercise tests: ${exercise.conceptsTested.join(", ")}

Evaluate the student's submission below using this exact order:
1. Check whether the student attempted the required concept(s).
2. Check Java syntax.
3. Check the program logic.
4. Check whether the described expected output/behaviour would be produced.
5. Check whether the solution only uses concepts already taught up to and including this lesson.
6. Identify any unnecessary complexity.
7. Prepare encouraging feedback and progressive hints (do not give the full corrected solution).

Student's submitted Java code:
\`\`\`java
${submittedCode}
\`\`\`

${compilerOutput ? `The student also pasted this compiler output / program output:\n${compilerOutput}\n` : "The student did not paste any compiler output."}

Respond with ONLY a single valid JSON object (no markdown fences, no extra commentary) with exactly this shape:
{
  "attemptedConcept": boolean,
  "correctness": "correct" | "partially-correct" | "incorrect",
  "whatYouDidCorrectly": string[],
  "whatNeedsImprovement": string[],
  "firstHint": string,
  "secondHint": string | null,
  "conceptToReview": string,
  "suggestedNextAction": string,
  "errorType": "syntax" | "runtime" | "logical" | "none"
}`;
}

export function buildChatMessages(
  lesson: Lesson,
  history: TutorChatMessage[],
  latestMessage: string,
  action?: FollowUpAction
) {
  const actionInstruction = action ? describeActionInstruction(action) : undefined;

  const userContent = actionInstruction
    ? `${actionInstruction}\n\nStudent's message (if any extra context): ${latestMessage || "(no extra message, just the button above)"}`
    : latestMessage;

  return [
    { role: "system" as const, content: TUTOR_SYSTEM_PROMPT },
    { role: "system" as const, content: buildLessonContext(lesson) },
    ...history.slice(-10).map((m) => ({
      role: m.role === "student" ? ("user" as const) : ("assistant" as const),
      content: m.content,
    })),
    { role: "user" as const, content: userContent },
  ];
}

function describeActionInstruction(action: FollowUpAction): string {
  switch (action) {
    case "explain-again":
      return "The student wants the current concept explained again, in a different way than before. Keep it short and clear.";
    case "simpler-explanation":
      return "The student is confused. Give an even simpler explanation than before, using a very basic everyday comparison, and check understanding with one small question.";
    case "another-example":
      return "Give the student one additional worked Java example of the current concept, different from the lesson's main example, ideally still related to the School Activity Management System. Briefly explain it.";
    case "hint":
      return "The student wants a hint for their current exercise, without the full solution. Give one focused, encouraging hint.";
    case "another-exercise":
      return "Give the student a new short practice exercise on the current concept, different from the one already provided, with brief instructions. Do not give starter code with the full solution filled in.";
    case "more-detail":
      return "The student wants to go deeper into the current concept. Share one useful additional detail or nuance appropriate for a beginner, without introducing unrelated advanced topics.";
    case "next-topic":
      return "The student wants to move to the next topic. Briefly congratulate them and confirm they are ready to proceed.";
    default:
      return "";
  }
}
