"use client";

import { useState } from "react";
import type { Exercise, EvaluationResult } from "@/data/types";
import { JavaCodeBlock } from "@/components/course/JavaCodeBlock";
import { SubmissionEditor, type SubmissionPayload } from "@/components/course/SubmissionEditor";
import { EvaluationPanel } from "@/components/course/EvaluationPanel";
import { useProgress } from "@/lib/progress/ProgressContext";
import { cn } from "@/lib/utils";

type ExercisePanelProps = {
  lessonId: string;
  exercise: Exercise;
  onRequestAnotherExercise?: () => void;
};

const DIFFICULTY_STYLES: Record<Exercise["difficulty"], string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-rose-100 text-rose-700",
};

export function ExercisePanel({ lessonId, exercise, onRequestAnotherExercise }: ExercisePanelProps) {
  const { recordExerciseAttempt } = useProgress();
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastPayload, setLastPayload] = useState<SubmissionPayload | null>(null);

  const handleSubmit = async (payload: SubmissionPayload) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setLastPayload(payload);

    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "evaluate",
          lessonId,
          code: payload.code,
          compilerOutput: payload.compilerOutput,
        }),
      });

      if (!response.ok) {
        throw new Error(`Evaluation request failed (${response.status})`);
      }

      const data: { result: EvaluationResult } = await response.json();
      setResult(data.result);
      recordExerciseAttempt({
        exerciseId: exercise.id,
        lessonId,
        submittedCode: payload.code,
        passed: data.result.correctness === "correct",
        feedbackSummary: data.result.suggestedNextAction,
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Something went wrong while reviewing your code. Please check your connection and try submitting again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-slate-900">🎯 {exercise.title}</h3>
        <span className={cn("shrink-0 rounded-full px-3 py-1 text-xs font-semibold", DIFFICULTY_STYLES[exercise.difficulty])}>
          {exercise.difficulty}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-slate-700">{exercise.instructions}</p>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-slate-700">Starter code</h4>
        <JavaCodeBlock code={exercise.starterCode} label="Main.java (starter)" />
      </div>

      <div className="rounded-lg bg-indigo-50 p-3 text-sm text-indigo-800">
        <span className="font-semibold">Expected behaviour: </span>
        {exercise.expectedBehaviour}
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h4 className="mb-3 text-sm font-semibold text-slate-700">Submit your solution</h4>
        <SubmissionEditor
          key={exercise.id}
          starterCode={exercise.starterCode}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>

      {errorMessage && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {errorMessage}
        </div>
      )}

      <EvaluationPanel result={result} isLoading={isSubmitting} />

      {result && result.correctness !== "correct" && onRequestAnotherExercise && (
        <button
          type="button"
          onClick={onRequestAnotherExercise}
          className="self-start text-sm font-medium text-orange-600 hover:text-orange-700"
        >
          Not ready to resubmit? Try a fresh exercise instead →
        </button>
      )}

      {lastPayload === null && (
        <p className="text-xs text-slate-400">
          Tip: you can write and run your code in any external Java compiler first, then paste the final code (and
          any errors) here.
        </p>
      )}
    </div>
  );
}
