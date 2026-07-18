"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type SubmissionPayload = {
  code: string;
  compilerOutput: string;
};

type SubmissionEditorProps = {
  starterCode: string;
  onSubmit: (payload: SubmissionPayload) => void;
  isSubmitting: boolean;
};

export function SubmissionEditor({ starterCode, onSubmit, isSubmitting }: SubmissionEditorProps) {
  const [code, setCode] = useState(starterCode);
  const [compilerOutput, setCompilerOutput] = useState("");

  const handleReset = () => setCode(starterCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || isSubmitting) return;
    onSubmit({ code, compilerOutput });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="student-code" className="text-sm font-semibold text-slate-700">
            Your Java code
          </label>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-medium text-slate-400 hover:text-slate-600"
          >
            Reset to starter code
          </button>
        </div>
        <textarea
          id="student-code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          rows={16}
          className={cn(
            "w-full rounded-xl border border-slate-300 bg-slate-900 p-4 font-mono text-sm text-slate-100",
            "leading-relaxed focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          )}
        />
      </div>

      <div>
        <label htmlFor="compiler-output" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Compiler errors or program output <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <p className="mb-1.5 text-xs text-slate-500">
          Ran your code in an external Java compiler? Paste any error messages or the printed output here so the
          tutor can help interpret them.
        </p>
        <textarea
          id="compiler-output"
          value={compilerOutput}
          onChange={(e) => setCompilerOutput(e.target.value)}
          spellCheck={false}
          rows={4}
          placeholder="e.g. error: incompatible types: String cannot be converted to int"
          className="w-full rounded-xl border border-slate-300 bg-white p-3 font-mono text-sm text-slate-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !code.trim()}
        className="self-start rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Reviewing your code..." : "Submit for review"}
      </button>
    </form>
  );
}
