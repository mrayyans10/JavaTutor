"use client";

import Link from "next/link";
import { courseModules, firstLesson, getModuleProgressCount, isFullLesson } from "@/data/course";
import { CourseLayout } from "@/components/course/CourseLayout";
import { useProgress } from "@/lib/progress/ProgressContext";

export default function CourseOverviewPage() {
  const { progress, isLoaded } = useProgress();
  const continueLessonId = progress.currentLessonId ?? firstLesson.id;
  const hasStarted = progress.completedLessonIds.length > 0 || !!progress.currentLessonId;

  return (
    <CourseLayout>
      <div className="flex flex-col gap-6">
        <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-100">
            School Activity Management System
          </p>
          <h1 className="mt-1 text-2xl font-bold sm:text-3xl">Learn Java, one step at a time</h1>
          <p className="mt-2 max-w-2xl text-orange-50">
            Every lesson explains a concept simply, shows a Java example, connects it to a real school system you
            build across the whole course, and gives you a coding exercise to try yourself.
          </p>
          <Link
            href={`/course/${continueLessonId}`}
            className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-orange-700 hover:bg-orange-50"
          >
            {isLoaded && hasStarted ? "Continue learning →" : "Start learning →"}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {courseModules.map((mod) => {
            const { completed, total } = getModuleProgressCount(mod.id, progress.completedLessonIds);
            const firstModuleLesson = mod.lessons.slice().sort((a, b) => a.order - b.order).find(isFullLesson);

            return (
              <div key={mod.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Module {mod.order}
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-900">{mod.title}</h2>
                <p className="mt-1 flex-1 text-sm text-slate-600">{mod.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {isLoaded ? completed : 0} / {total} lessons complete
                  </span>
                  {firstModuleLesson && (
                    <Link
                      href={`/course/${firstModuleLesson.id}`}
                      className="text-sm font-semibold text-orange-600 hover:text-orange-700"
                    >
                      View →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CourseLayout>
  );
}
