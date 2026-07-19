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

async function handleEvaluate(lessonId: string, body: EvaluateRequestBody) {
  const lesson = getFullLesson(lessonId);
  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found." }, { status: 404 });
  }
  if (!body.code || typeof body.code !== "string") {
    return NextResponse.json({ error: "Missing 'code' field." }, { status: 400 });
  }

  const mockResult = evaluateSubmissionWithMockEvaluator({
    lesson,
    exercise: lesson.exercise,
    submittedCode: body.code,
    compilerOutput: body.compilerOutput,
  });

  if (!isAIConfigured()) {
    return NextResponse.json({ result: mockResult });
  }

  try {
    const prompt = buildEvaluationPrompt(lesson, lesson.exercise, body.code, body.compilerOutput);
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
      message: buildCannedTutorReply(body.action, lesson.title),
      source: "mock",
    });
  }

  try {
    const messages = buildChatMessages(lesson, history, body.message ?? "", body.action);
    const reply = await requestChatCompletion(messages);
    return NextResponse.json({
      type: responseType,
      message: reply || buildCannedTutorReply(body.action, lesson.title),
      source: "ai",
    });
  } catch (error) {
    console.error("AI chat request failed, falling back to canned reply:", error);
    return NextResponse.json({
      type: responseType,
      message: buildCannedTutorReply(body.action, lesson.title),
      source: "mock",
    });
  }
}

/**
 * Canned, still-useful replies used when no AI provider is configured
 * (e.g. no OPENAI_API_KEY set), so the tutor chat remains fully functional
 * in the MVP without any external dependency.
 */
function buildCannedTutorReply(action: FollowUpAction | undefined, lessonTitle: string): string {
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
      return `Based on reviewing your question, I'd suggest re-reading the "Simple explanation" and "Worked Java example" sections of this lesson first. If something specific is still unclear, tell me exactly which line or word is confusing you, and I'll help from there. (Note: an AI provider is not configured yet, so this is a scripted response rather than a fully dynamic one - see the README for how to enable full AI tutoring.)`;
  }
}
