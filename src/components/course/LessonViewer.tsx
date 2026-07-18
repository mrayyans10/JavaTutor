"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Lesson } from "@/data/types";
import { ConceptExplanation } from "@/components/course/ConceptExplanation";
import { JavaCodeBlock } from "@/components/course/JavaCodeBlock";
import { ExercisePanel } from "@/components/course/ExercisePanel";
import { NextActionButtons } from "@/components/course/NextActionButtons";
import { TutorChat } from "@/components/tutor/TutorChat";
import { useProgress } from "@/lib/progress/ProgressContext";
import { useTutorChat } from "@/lib/tutor/useTutorChat";
import { getModule, getNextFullLesson } from "@/data/course";
import { quizzes } from "@/data/quizzes";
import type { FollowUpAction } from "@/lib/tutor/actions";

type LessonViewerProps = {
  lesson: Lesson;
};

export function LessonViewer({ lesson }: LessonViewerProps) {
  const router = useRouter();
  const { setCurrentLesson, markLessonComplete } = useProgress();
  const { messages, isLoading, sendAction, sendMessage } = useTutorChat(lesson.id);
  const courseModule = getModule(lesson.moduleId);
  const followingQuiz = quizzes.find(
    (q) => q.coversLessonIds[q.coversLessonIds.length - 1] === lesson.id
  );

  useEffect(() => {
    setCurrentLesson(lesson.id);
    // Only re-run when the lesson actually changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

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
    sendAction(action);
  };

  const lessonPositionLabel = courseModule
    ? `Module ${courseModule.order}, Lesson ${lesson.order}`
    : `Lesson ${lesson.order}`;

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

        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900">✍️ Exercise</h2>
          <ExercisePanel lessonId={lesson.id} exercise={lesson.exercise} />
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
    </div>
  );
}

function ConceptExplanationInline({ markdown }: { markdown: string }) {
  return <ConceptExplanation markdown={markdown} className="inline prose-p:inline prose-p:m-0" />;
}
