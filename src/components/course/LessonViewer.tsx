"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Lesson } from "@/data/types";
import { ConceptExplanation } from "@/components/course/ConceptExplanation";
import { JavaCodeBlock } from "@/components/course/JavaCodeBlock";
import { ExercisePanel } from "@/components/course/ExercisePanel";
import { NextActionButtons } from "@/components/course/NextActionButtons";
import { TutorChat } from "@/components/tutor/TutorChat";
import { Toast } from "@/components/ui/Toast";
import { useProgress } from "@/lib/progress/ProgressContext";
import { useTutorChat } from "@/lib/tutor/useTutorChat";
import { useExerciseSession } from "@/lib/tutor/useExerciseSession";
import { getModule, getNextFullLesson } from "@/data/course";
import { quizzes } from "@/data/quizzes";
import type { FollowUpAction } from "@/lib/tutor/actions";

type LessonViewerProps = {
  lesson: Lesson;
};

const EXERCISE_GENERATING_ACTIONS: FollowUpAction[] = ["another-example", "another-exercise"];

export function LessonViewer({ lesson }: LessonViewerProps) {
  const router = useRouter();
  const { setCurrentLesson, markLessonComplete } = useProgress();
  const { messages, isLoading, sendAction, sendMessage, addSystemNote } = useTutorChat(lesson.id);
  const {
    currentExercise,
    isGenerating,
    error: exerciseError,
    requestNextExercise,
    markExerciseCompleted,
    completedExerciseIds,
  } = useExerciseSession(lesson);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const exerciseSectionRef = useRef<HTMLDivElement>(null);
  const courseModule = getModule(lesson.moduleId);
  const followingQuiz = quizzes.find(
    (q) => q.coversLessonIds[q.coversLessonIds.length - 1] === lesson.id
  );

  useEffect(() => {
    setCurrentLesson(lesson.id);
    // Only re-run when the lesson actually changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  const scrollToExerciseAndFocus = () => {
    window.setTimeout(() => {
      exerciseSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("student-code")?.focus();
    }, 50);
  };

  const handleGenerateExercise = async (kind: "another-example" | "another-exercise") => {
    const generated = await requestNextExercise(kind);
    if (generated) {
      addSystemNote("📘 New practice exercise ready — check the Exercise Panel below!");
      setToastMessage("New Practice Exercise Loaded");
      scrollToExerciseAndFocus();
    } else {
      addSystemNote(
        exerciseError ?? "Sorry, I couldn't generate a new exercise just now. Please try again in a moment."
      );
    }
  };

  const handleNextAction = (action: FollowUpAction) => {
    if (action === "next-topic") {
      markLessonComplete(lesson.id);
      if (followingQuiz) {
        router.push(`/quiz/${followingQuiz.id}`);
        return;
      }
      const next = getNextFullLesson(lesson.id);
      if (next) {
        router.push(`/course/${next.id}`);
      } else {
        router.push("/dashboard");
      }
      return;
    }

    if (EXERCISE_GENERATING_ACTIONS.includes(action)) {
      handleGenerateExercise(action as "another-example" | "another-exercise");
      return;
    }

    sendAction(action);
  };

  const lessonPositionLabel = courseModule
    ? `Module ${courseModule.order}, Lesson ${lesson.order}`
    : `Lesson ${lesson.order}`;

  const busyActions: FollowUpAction[] =
    isLoading || isGenerating
      ? ["explain-again", "simpler-explanation", "another-example", "hint", "another-exercise", "more-detail"]
      : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
            {lessonPositionLabel}
          </p>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{lesson.title}</h1>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm font-semibold text-slate-500">Learning objective</p>
            <p className="mt-1 text-sm text-slate-700">{lesson.objective}</p>
          </div>
        </header>

        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900">📘 Simple explanation</h2>
          <ConceptExplanation markdown={lesson.explanation} />
        </section>

        <section className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
          <h2 className="mb-2 text-lg font-bold text-orange-900">🌍 Real-world analogy</h2>
          <ConceptExplanation markdown={lesson.analogy} className="prose-p:text-orange-900" />
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900">🔤 Basic syntax</h2>
          <ConceptExplanation markdown={lesson.syntax} />
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900">💻 Worked Java example</h2>
          <JavaCodeBlock code={lesson.exampleCode} label="Main.java" className="mb-4" />
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="mb-2 text-sm font-semibold text-slate-700">Line-by-line walkthrough</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-slate-600">
              {lesson.exampleExplanation.map((line, i) => (
                <li key={i}>
                  <ConceptExplanationInline markdown={line} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="mb-2 text-lg font-bold text-amber-900">⚠️ Common mistakes</h2>
          <ul className="list-inside list-disc space-y-1.5 text-sm text-amber-800">
            {lesson.commonMistakes.map((mistake, i) => (
              <li key={i}>
                <ConceptExplanationInline markdown={mistake} />
              </li>
            ))}
          </ul>
        </section>

        <section ref={exerciseSectionRef} id="exercise-panel">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">✍️ Exercise</h2>
            {isGenerating && (
              <span className="flex items-center gap-1.5 text-xs font-medium text-orange-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
                Generating a new exercise...
              </span>
            )}
          </div>
          <ExercisePanel
            key={currentExercise.id}
            lessonId={lesson.id}
            exercise={currentExercise}
            isCompleted={completedExerciseIds.includes(currentExercise.id)}
            onResult={(result) => {
              if (result.correctness === "correct") {
                markExerciseCompleted(currentExercise.id);
              }
            }}
            onRequestAnotherExercise={() => handleGenerateExercise("another-exercise")}
          />
        </section>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <NextActionButtons
            onSelect={handleNextAction}
            actions={
              [
                "explain-again",
                "simpler-explanation",
                "another-example",
                "hint",
                "another-exercise",
                "more-detail",
                "next-topic",
              ] as FollowUpAction[]
            }
            disabledActions={busyActions}
          />
        </div>
      </div>

      <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
        <TutorChat
          messages={messages}
          isLoading={isLoading}
          onSend={sendMessage}
          lessonTitle={lesson.title}
        />
      </aside>

      <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />
    </div>
  );
}

function ConceptExplanationInline({ markdown }: { markdown: string }) {
  return <ConceptExplanation markdown={markdown} className="inline prose-p:inline prose-p:m-0" />;
}
