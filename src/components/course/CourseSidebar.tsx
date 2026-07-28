"use client";

import Link from "next/link";
import { useState } from "react";
import { courseModules, isFullLesson } from "@/data/course";
import { quizzes } from "@/data/quizzes";
import { useProgress } from "@/lib/progress/ProgressContext";
import { cn } from "@/lib/utils";

type CourseSidebarProps = {
  currentLessonId?: string;
  className?: string;
};

function quizFollowingLesson(lessonId: string) {
  return quizzes.find((q) => q.coversLessonIds[q.coversLessonIds.length - 1] === lessonId);
}

export function CourseSidebar({ currentLessonId, className }: CourseSidebarProps) {
  const { progress, isLoaded } = useProgress();
  const currentModuleId = courseModules.find((m) =>
    m.lessons.some((l) => l.id === currentLessonId)
  )?.id;
  const [openModuleId, setOpenModuleId] = useState<string | undefined>(currentModuleId);

  return (
    <nav className={cn("flex flex-col gap-1 overflow-y-auto", className)} aria-label="Course navigation">
      {courseModules.map((mod) => {
        const isOpen = openModuleId === mod.id || currentModuleId === mod.id;
        const fullLessons = mod.lessons.filter(isFullLesson);
        const completedInModule = fullLessons.filter((l) =>
          progress.completedLessonIds.includes(l.id)
        ).length;

        return (
          <div key={mod.id} className="border-b border-slate-100 pb-1">
            <button
              type="button"
              onClick={() => setOpenModuleId(isOpen ? undefined : mod.id)}
              className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left hover:bg-slate-100"
            >
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Module {mod.order}
                </span>
                <span className="text-sm font-semibold text-slate-800">{mod.title}</span>
              </span>
              <span className="flex items-center gap-2">
                {fullLessons.length > 0 && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                    {isLoaded ? completedInModule : 0}/{fullLessons.length}
                  </span>
                )}
                <span className={cn("text-slate-400 transition-transform", isOpen && "rotate-90")}>
                  ›
                </span>
              </span>
            </button>

            {isOpen && (
              <ul className="mt-1 flex flex-col gap-0.5 px-2">
                {mod.lessons
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((lesson) => {
                    const isCurrent = lesson.id === currentLessonId;
                    const isCompleted = progress.completedLessonIds.includes(lesson.id);
                    const followingQuiz = isFullLesson(lesson)
                      ? quizFollowingLesson(lesson.id)
                      : undefined;

                    return (
                      <li key={lesson.id}>
                        {isFullLesson(lesson) ? (
                          <Link
                            href={`/course/${lesson.id}`}
                            className={cn(
                              "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
                              isCurrent
                                ? "bg-orange-100 font-medium text-orange-800"
                                : "text-slate-600 hover:bg-slate-100"
                            )}
                          >
                            <span
                              className={cn(
                                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px]",
                                isCompleted
                                  ? "border-green-500 bg-green-500 text-white"
                                  : "border-slate-300 text-transparent"
                              )}
                            >
                              ✓
                            </span>
                            <span className="truncate">{lesson.title}</span>
                          </Link>
                        ) : (
                          <div
                            className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-slate-400"
                            title={lesson.note ?? "Coming soon in a future update"}
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[10px]" />
                            <span className="truncate">{lesson.title}</span>
                            <span className="ml-auto shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                              Soon
                            </span>
                          </div>
                        )}
                        {followingQuiz && (
                          <Link
                            href={`/quiz/${followingQuiz.id}`}
                            className="ml-6 flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-indigo-600 hover:bg-indigo-50"
                          >
                            📝 {followingQuiz.title}
                          </Link>
                        )}
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
