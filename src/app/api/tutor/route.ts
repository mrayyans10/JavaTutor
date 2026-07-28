import { NextRequest, NextResponse } from "next/server";
import { getFullLesson } from "@/data/course";
import { getPracticeExercise } from "@/data/practiceExercises";
import { evaluateSubmissionWithMockEvaluator } from "@/lib/evaluation/mockEvaluator";
import {
  isAIConfigured,
  parseEvaluationResponse,
  parseExerciseResponse,
  requestChatCompletion,
} from "@/lib/ai/client";
import {
  buildChatMessages,
  buildEvaluationPrompt,
  buildExerciseGenerationPrompt,
  TUTOR_SYSTEM_PROMPT,
} from "@/lib/ai/prompts";
import type { EvaluationResult, Exercise, Lesson, TutorChatMessage, TutorResponse } from "@/data/types";
import type { FollowUpAction } from "@/lib/tutor/actions";

export const runtime = "nodejs";

type EvaluateRequestBody = {
  mode: "evaluate";
  lessonId: string;
  /**
   * The exercise CURRENTLY displayed in the Exercise Panel. This may be a
   * dynamically generated practice exercise, not the lesson's original
   * exercise - it must always be used as the source of truth for review.
   */
  exercise?: Exercise;
  code: string;
  compilerOutput?: string;
};

type ChatRequestBody = {
  mode: "chat";
  lessonId: string;
  message: string;
  history?: TutorChatMessage[];
  action?: FollowUpAction;
  /** Which practice attempt this is for the lesson (2 = first generated exercise). */
  practiceNumber?: number;
  /** Titles of exercises already served this session, so the AI avoids repeats. */
  previousTitles?: string[];
};

type RequestBody = EvaluateRequestBody | ChatRequestBody;

const EXERCISE_GENERATING_ACTIONS: FollowUpAction[] = ["another-example", "another-exercise"];

export async function POST(request: NextRequest) {
  let body: RequestBody;
  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || !("mode" in body)) {
    return NextResponse.json({ error: "Missing 'mode' field." }, { status: 400 });
  }

  const lesson = getFullLesson(body.lessonId);
  if (!lesson) {
    return NextResponse.json({ error: `Unknown lessonId: ${body.lessonId}` }, { status: 404 });
  }

  if (body.mode === "evaluate") {
    return handleEvaluate(lesson.id, body);
  }

  if (body.mode === "chat") {
    if (body.action && EXERCISE_GENERATING_ACTIONS.includes(body.action)) {
      return handleExerciseGeneration(lesson, body);
    }
    return handleChat(lesson.id, body);
  }

  return NextResponse.json({ error: "Unsupported mode." }, { status: 400 });
}

function isValidExercisePayload(value: unknown): value is Exercise {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<Exercise>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.title === "string" &&
    typeof candidate.instructions === "string" &&
    typeof candidate.starterCode === "string" &&
    typeof candidate.expectedBehaviour === "string" &&
    Array.isArray(candidate.conceptsTested)
  );
}

async function handleEvaluate(lessonId: string, body: EvaluateRequestBody) {
  const lesson = getFullLesson(lessonId);
  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found." }, { status: 404 });
  }
  if (!body.code || typeof body.code !== "string") {
    return NextResponse.json({ error: "Missing 'code' field." }, { status: 400 });
  }

  // The exercise CURRENTLY shown in the Exercise Panel is the single source
  // of truth for review - never fall back to the lesson's original exercise
  // unless the client genuinely didn't send one (e.g. an older client build).
  const activeExercise: Exercise = isValidExercisePayload(body.exercise) ? body.exercise : lesson.exercise;

  const mockResult = evaluateSubmissionWithMockEvaluator({
    lesson,
    exercise: activeExercise,
    submittedCode: body.code,
    compilerOutput: body.compilerOutput,
  });

  if (!isAIConfigured()) {
    return NextResponse.json({ result: mockResult });
  }

  try {
    const prompt = buildEvaluationPrompt(lesson, activeExercise, body.code, body.compilerOutput);
    const raw = await requestChatCompletion([
      { role: "system", content: TUTOR_SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ]);
    const parsed = parseEvaluationResponse(raw);
    if (!parsed) {
      return NextResponse.json({ result: mockResult, aiFallbackReason: "unparseable-response" });
    }
    const result: EvaluationResult = { ...parsed, source: "ai" };
    return NextResponse.json({ result });
  } catch (error) {
    console.error("AI evaluation request failed, falling back to mock evaluator:", error);
    return NextResponse.json({ result: mockResult, aiFallbackReason: "request-failed" });
  }
}

/**
 * Handles "Show another example" and "Give me another exercise". These
 * NEVER return chat text containing a Java program - they always return
 * `{ type: "exercise", exercise }`, which the frontend loads directly into
 * the Exercise Panel.
 */
async function handleExerciseGeneration(
  lesson: Lesson,
  body: ChatRequestBody
): Promise<NextResponse<TutorResponse>> {
  const practiceNumber = body.practiceNumber && body.practiceNumber >= 2 ? body.practiceNumber : 2;
  const previousTitles = Array.isArray(body.previousTitles) ? body.previousTitles : [];

  const fallbackExercise = buildFallbackExercise(lesson, practiceNumber);

  if (!isAIConfigured()) {
    return NextResponse.json({
      type: "exercise",
      exercise: fallbackExercise,
      message: "Here's a new practice exercise - check the panel below!",
      source: "mock",
    });
  }

  try {
    const prompt = buildExerciseGenerationPrompt(lesson, practiceNumber, previousTitles);
    const raw = await requestChatCompletion([
      { role: "system", content: TUTOR_SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ]);
    const parsedExercise = parseExerciseResponse(raw, lesson.id);
    if (!parsedExercise) {
      return NextResponse.json({
        type: "exercise",
        exercise: fallbackExercise,
        message: "Here's a new practice exercise - check the panel below!",
        source: "mock",
      });
    }
    return NextResponse.json({
      type: "exercise",
      exercise: parsedExercise,
      message: "Here's a new practice exercise - check the panel below!",
      source: "ai",
    });
  } catch (error) {
    console.error("AI exercise generation failed, falling back to practice bank:", error);
    return NextResponse.json({
      type: "exercise",
      exercise: fallbackExercise,
      message: "Here's a new practice exercise - check the panel below!",
      source: "mock",
    });
  }
}

function buildFallbackExercise(lesson: Lesson, practiceNumber: number): Exercise {
  return (
    getPracticeExercise(lesson.id, practiceNumber) ?? {
      ...lesson.exercise,
      id: `${lesson.exercise.id}-repeat-${practiceNumber}`,
      title: `${lesson.exercise.title} (Try Again)`,
    }
  );
}

async function handleChat(lessonId: string, body: ChatRequestBody): Promise<NextResponse<TutorResponse>> {
  const lesson = getFullLesson(lessonId);
  if (!lesson) {
    return NextResponse.json({ type: "chat", message: "Lesson not found.", source: "mock" }, { status: 404 });
  }

  const history = Array.isArray(body.history) ? body.history : [];
  const responseType: "chat" | "hint" = body.action === "hint" ? "hint" : "chat";

  if (!isAIConfigured()) {
    return NextResponse.json({
      type: responseType,
      message: buildCannedTutorReply(body.action, lesson.title, body.message),
      source: "mock",
    });
  }

  try {
    const messages = buildChatMessages(lesson, history, body.message ?? "", body.action);
    const reply = await requestChatCompletion(messages);
    return NextResponse.json({
      type: responseType,
      message: reply || buildCannedTutorReply(body.action, lesson.title, body.message),
      source: "ai",
    });
  } catch (error) {
    console.error("AI chat request failed, falling back to canned reply:", error);
    return NextResponse.json({
      type: responseType,
      message: buildCannedTutorReply(body.action, lesson.title, body.message),
      source: "mock",
    });
  }
}

/**
 * Canned, still-useful replies used when no AI provider is configured
 * (e.g. no OPENAI_API_KEY set), so the tutor chat remains fully functional
 * in the MVP without any external dependency.
 */
function buildCannedTutorReply(
  action: FollowUpAction | undefined,
  lessonTitle: string,
  freeformMessage?: string
): string {
  switch (action) {
    case "explain-again":
      return `Let's go over **${lessonTitle}** again. Scroll back up to the "Simple explanation" section above and re-read it slowly, one bullet at a time. Which part feels the most unclear - the *what*, the *why*, or the *syntax*? Tell me and I'll focus there.`;
    case "simpler-explanation":
      return `No problem - let's simplify. Think of this concept as a small, everyday rule you already follow (like deciding what to wear based on the weather). The Java code is just a very precise way of writing that same kind of rule down. Which specific line in the example is confusing you?`;
    case "hint":
      return `Here's a hint: re-read the exercise's "Expected behaviour" section, and compare it line by line with what your code currently does. Focus first on the very first difference you notice - fixing that often unlocks the rest.`;
    case "more-detail":
      return `Good instinct to dig deeper. One extra detail worth knowing about **${lessonTitle}**: pay close attention to the "Common mistakes" list in this lesson - each one there is a real mistake beginners make, so avoiding them will put you ahead.`;
    case "next-topic":
      return `Nice work finishing this lesson! When you're ready, use the sidebar (or the "Continue Learning" button on your dashboard) to move to the next topic.`;
    default:
      return buildCannedFreeformReply(freeformMessage ?? "", lessonTitle);
  }
}

/**
 * Without an AI provider, we can't truly understand a freely-typed
 * question - but simple keyword matching lets us give a noticeably more
 * relevant scripted reply than one single generic fallback for every
 * possible question, which previously made the chat feel broken/repetitive.
 */
function buildCannedFreeformReply(message: string, lessonTitle: string): string {
  const text = message.toLowerCase();

  const asksForSample = /\b(sample|example|solution|answer key|full code|complete code|show me the code)\b/.test(
    text
  );
  const mentionsError = /\b(error|doesn'?t work|not working|bug|broke|broken|wrong|exception|crash)\b/.test(text);
  const asksForHint = /\b(hint|stuck|clue|nudge|help me)\b/.test(text);
  const isConfused =
    /\bconfus\w*\b|\bdon'?t understand\b|\bdont understand\b|\blost\b|\bunclear\b|\bmakes no sense\b|\bnot clear\b/.test(
      text
    );
  const asksWhy = /\bwhy\b/.test(text);

  if (asksForSample) {
    return `I can't paste a full Java program directly into this chat - working code always goes through the Exercise Panel so you get real starter code plus proper evaluation, not just text to copy. Click **"Show another example"** for a worked example, or **"Give me another exercise"** for a new practice problem, below the lesson - a fresh one will load straight into the panel for you to try.`;
  }
  if (mentionsError) {
    return `To help with an error, paste your full code AND the exact error message into the "Your Java code" and "Compiler errors or program output" boxes in the Exercise Panel, then click "Submit for review" - that gives a structured review of exactly what's wrong. I can't reliably diagnose an error from a description alone here in chat.`;
  }
  if (asksForHint) {
    return `Here's a general hint: re-read the exercise's "Expected behaviour" line, then go through your code one statement at a time and check whether it actually produces that. The first mismatch you find is usually the key issue. For a hint based on your actual submitted code, click "Submit for review" first, then ask again.`;
  }
  if (isConfused) {
    return `No worries - let's slow down. Re-read the "Simple explanation" section above one bullet at a time, then check the "Real-world analogy" - it's often the fastest way to make a new idea click. Tell me exactly which sentence or line of code is the confusing part, and I'll focus there.`;
  }
  if (asksWhy) {
    return `Good question. The "Why it is needed" part of the "Simple explanation" section above answers exactly this for **${lessonTitle}**. If your question is about a specific line of code instead, tell me which line and I'll point you to the matching part of the "Line-by-line walkthrough".`;
  }

  return `Based on reviewing your question, I'd suggest re-reading the "Simple explanation" and "Worked Java example" sections of this lesson first. If something specific is still unclear, tell me exactly which line or word is confusing you, and I'll help from there. (Note: an AI provider is not configured yet, so this is a scripted response rather than a fully dynamic one - see the README for how to enable full AI tutoring.)`;
}
