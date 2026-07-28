"use client";

import Link from "next/link";
import { getLesson, getOverallProgress, getModuleProgressCount, courseModules, firstLesson } from "@/data/course";
import { getQuiz } from "@/data/quizzes";
import { useProgress } from "@/lib/progress/ProgressContext";
import { formatDate } from "@/lib/utils";

export function ProgressDashboard() {
  const { progress, isLoaded, removeTopicToReview } = useProgress();
  const { completed, total, percent } = getOverallProgress(progress.completedLessonIds);

  const currentLessonId = progress.currentLessonId ?? firstLesson.id;
  const currentLesson = getLesson(currentLessonId);

  const recentAttempts = [...progress.exerciseAttempts]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 6);

  if (!isLoaded) {
    return <div className="p-10 text-center text-slate-400">Loading your progress...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Overall progress</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{percent}%</p>
          <p className="text-sm text-slate-500">
            {completed} of {total} lessons complete
          </p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-orange-500" style={{ width: `${percent}%` }} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Exercise attempts</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{progress.exerciseAttempts.length}</p>
          <p className="text-sm text-slate-500">
            {progress.exerciseAttempts.filter((a) => a.passed).length} marked as correct
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Quizzes taken</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{progress.quizResults.length}</p>
          <p className="text-sm text-slate-500">Last visited: {formatDate(progress.lastVisited)}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <p className="text-sm font-semibold text-orange-900">Current lesson</p>
        <h2 className="mt-1 text-xl font-bold text-orange-950">
          {currentLesson?.title ?? "Get started with your first lesson"}
        </h2>
        <Link
          href={`/course/${currentLessonId}`}
          className="mt-4 inline-block rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
        >
          Continue learning →
        </Link>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="mb-3 text-base font-bold text-slate-900">Module completion</h3>
          <ul className="flex flex-col gap-2">
            {courseModules.map((mod) => {
              const moduleProgress = getModuleProgressCount(mod.id, progress.completedLessonIds);
              const isComplete = moduleProgress.total > 0 && moduleProgress.completed === moduleProgress.total;
              return (
                <li key={mod.id} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span className="text-sm text-slate-700">
                    Module {mod.order}: {mod.title}
                  </span>
                  <span
                    className={`text-xs font-semibold ${isComplete ? "text-green-600" : "text-slate-400"}`}
                  >
                    {moduleProgress.completed}/{moduleProgress.total}
                    {isComplete && " ✓"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="mb-3 text-base font-bold text-slate-900">Topics to review</h3>
          {progress.topicsToReview.length === 0 ? (
            <p className="text-sm text-slate-500">
              Nothing flagged yet - topics you repeatedly struggle with will show up here automatically.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {progress.topicsToReview.map((lessonId) => {
                const lesson = getLesson(lessonId);
                if (!lesson) return null;
                return (
                  <li
                    key={lessonId}
                    className="flex items-center justify-between rounded-lg bg-amber-50 px-3 py-2"
                  >
                    <Link href={`/course/${lessonId}`} className="text-sm font-medium text-amber-800 hover:underline">
                      {lesson.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeTopicToReview(lessonId)}
                      className="text-xs font-medium text-amber-600 hover:text-amber-800"
                    >
                      Dismiss
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="mb-3 text-base font-bold text-slate-900">Recent exercises</h3>
        {recentAttempts.length === 0 ? (
          <p className="text-sm text-slate-500">You haven&apos;t submitted any exercises yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {recentAttempts.map((attempt, i) => {
              const lesson = getLesson(attempt.lessonId);
              return (
                <li
                  key={`${attempt.exerciseId}-${i}`}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                >
                  <div>
                    <Link href={`/course/${attempt.lessonId}`} className="text-sm font-medium text-slate-800 hover:underline">
                      {lesson?.title ?? attempt.lessonId}
                    </Link>
                    <p className="text-xs text-slate-400">{formatDate(attempt.timestamp)}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      attempt.passed ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {attempt.passed ? "Correct" : "Needs work"}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {progress.quizResults.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="mb-3 text-base font-bold text-slate-900">Quiz scores</h3>
          <ul className="flex flex-col gap-2">
            {progress.quizResults.map((result) => {
              const quiz = getQuiz(result.quizId);
              return (
                <li
                  key={result.quizId}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                >
                  <Link href={`/quiz/${result.quizId}`} className="text-sm font-medium text-slate-800 hover:underline">
                    {quiz?.title ?? result.quizId}
                  </Link>
                  <span className="text-xs font-semibold text-slate-500">
                    {result.score}/{result.total}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
