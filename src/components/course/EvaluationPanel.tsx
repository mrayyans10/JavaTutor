"use client";

import { useState } from "react";
import type { EvaluationResult } from "@/data/types";
import { cn } from "@/lib/utils";

type EvaluationPanelProps = {
  result: EvaluationResult | null;
  isLoading: boolean;
};

const CORRECTNESS_STYLES: Record<EvaluationResult["correctness"], string> = {
  correct: "bg-green-50 border-green-300 text-green-800",
  "partially-correct": "bg-amber-50 border-amber-300 text-amber-800",
  incorrect: "bg-rose-50 border-rose-300 text-rose-800",
};

const CORRECTNESS_LABELS: Record<EvaluationResult["correctness"], string> = {
  correct: "Looking good!",
  "partially-correct": "Getting there",
  incorrect: "Needs another try",
};

const ERROR_TYPE_LABELS: Record<EvaluationResult["errorType"], string> = {
  syntax: "Syntax error (the code doesn't follow Java's grammar rules)",
  runtime: "Runtime error (the code compiles, but fails while running)",
  logical: "Logical error (the code runs, but the result isn't quite right)",
  none: "No error detected",
};

export function EvaluationPanel({ result, isLoading }: EvaluationPanelProps) {
  const [showSecondHint, setShowSecondHint] = useState(false);

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-3 rounded-xl border border-slate-200 bg-white p-5">
        <div className="h-4 w-40 rounded bg-slate-200" />
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-5/6 rounded bg-slate-100" />
        <div className="h-3 w-3/4 rounded bg-slate-100" />
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-medium text-slate-400">
          {result.source === "ai" ? "Based on reviewing your code with AI assistance..." : "Based on reviewing your code..."}
        </p>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-semibold",
            CORRECTNESS_STYLES[result.correctness]
          )}
        >
          {CORRECTNESS_LABELS[result.correctness]}
        </span>
      </div>

      {result.errorType !== "none" && (
        <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
          Type of issue: {ERROR_TYPE_LABELS[result.errorType]}
        </div>
      )}

      <section>
        <h4 className="mb-1.5 text-sm font-semibold text-slate-800">✅ What you did correctly</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
          {result.whatYouDidCorrectly.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {result.whatNeedsImprovement.length > 0 && (
        <section>
          <h4 className="mb-1.5 text-sm font-semibold text-slate-800">🔧 What needs improvement</h4>
          <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
            {result.whatNeedsImprovement.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {result.firstHint && (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <h4 className="mb-1 text-sm font-semibold text-amber-900">💡 Hint 1</h4>
          <p className="text-sm text-amber-800">{result.firstHint}</p>
        </section>
      )}

      {result.secondHint && !showSecondHint && (
        <button
          type="button"
          onClick={() => setShowSecondHint(true)}
          className="self-start text-sm font-medium text-orange-600 hover:text-orange-700"
        >
          Still stuck? Show me a second hint →
        </button>
      )}

      {result.secondHint && showSecondHint && (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <h4 className="mb-1 text-sm font-semibold text-amber-900">💡 Hint 2</h4>
          <p className="text-sm text-amber-800">{result.secondHint}</p>
        </section>
      )}

      <section className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-slate-50 p-3">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Concept to review
          </h4>
          <p className="text-sm text-slate-700">{result.conceptToReview}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Suggested next action
          </h4>
          <p className="text-sm text-slate-700">{result.suggestedNextAction}</p>
        </div>
      </section>
    </div>
  );
}
