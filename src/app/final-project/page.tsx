"use client";

import Link from "next/link";
import { finalProjectStages, allFinalProjectTasks } from "@/data/finalProject";
import { useProgress } from "@/lib/progress/ProgressContext";
import { cn } from "@/lib/utils";

export default function FinalProjectPage() {
  const { progress, isLoaded, toggleFinalProjectTask } = useProgress();

  const completedCount = allFinalProjectTasks.filter(
    (task) => progress.finalProjectChecklist[task.id]
  ).length;
  const total = allFinalProjectTasks.length;
  const percent = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">Module 8 · Final Project</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
          School Activity Management System
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          This is the project you have been building toward all course. Use everything you have learned - classes,
          inheritance, collections, exception handling - to build a real, menu-driven Java application. Work
          through the stages below in order, checking off each task as you complete it in your own Java project
          (in any external editor or online compiler).
        </p>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between text-sm font-medium text-slate-600">
            <span>Overall build progress</span>
            <span>{isLoaded ? percent : 0}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-orange-500" style={{ width: `${isLoaded ? percent : 0}%` }} />
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-6">
        {finalProjectStages.map((stage, stageIndex) => (
          <section key={stage.id} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Stage {stageIndex + 1}
            </p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">{stage.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{stage.summary}</p>

            <ul className="mt-4 flex flex-col gap-2">
              {stage.tasks.map((task) => {
                const isChecked = !!progress.finalProjectChecklist[task.id];
                return (
                  <li
                    key={task.id}
                    className={cn(
                      "flex items-start gap-3 rounded-lg border p-3",
                      isChecked ? "border-green-200 bg-green-50" : "border-slate-200 bg-slate-50"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFinalProjectTask(task.id)}
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs",
                        isChecked ? "border-green-500 bg-green-500 text-white" : "border-slate-300 text-transparent"
                      )}
                      aria-label={`Mark "${task.title}" as ${isChecked ? "incomplete" : "complete"}`}
                    >
                      ✓
                    </button>
                    <div className="min-w-0">
                      <p className={cn("text-sm font-semibold", isChecked ? "text-green-800" : "text-slate-800")}>
                        {task.title}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">{task.description}</p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        {task.relatedConcepts.map((concept) => (
                          <span
                            key={concept}
                            className="rounded-full bg-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                          >
                            {concept}
                          </span>
                        ))}
                        {task.relatedLessonId && (
                          <Link
                            href={`/course/${task.relatedLessonId}`}
                            className="text-[11px] font-semibold text-orange-600 hover:underline"
                          >
                            Review the related lesson →
                          </Link>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
