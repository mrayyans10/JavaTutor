"use client";

import { useState } from "react";
import Link from "next/link";
import type { Quiz, QuizQuestion } from "@/data/types";
import { JavaCodeBlock } from "@/components/course/JavaCodeBlock";
import { useProgress } from "@/lib/progress/ProgressContext";
import { getLesson, getNextFullLesson } from "@/data/course";
import { cn } from "@/lib/utils";

type QuizPanelProps = {
  quiz: Quiz;
};

type ChoiceAnswers = Record<string, number>;

export function QuizPanel({ quiz }: QuizPanelProps) {
  const { recordQuizResult, addTopicToReview } = useProgress();
  const [choiceAnswers, setChoiceAnswers] = useState<ChoiceAnswers>({});
  const [codingAnswer, setCodingAnswer] = useState<string>(
    () => (quiz.questions.find((q) => q.type === "coding") as { starterCode?: string } | undefined)
      ?.starterCode ?? ""
  );
  const [codingWorked, setCodingWorked] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const choiceQuestions = quiz.questions.filter(
    (q): q is QuizQuestion & { type: "multiple-choice" | "predict-output" | "find-error" } =>
      q.type !== "coding"
  );
  const codingQuestion = quiz.questions.find((q) => q.type === "coding");

  const allChoicesAnswered = choiceQuestions.every((q) => choiceAnswers[q.id] !== undefined);
  const codingAnswered = !codingQuestion || codingWorked !== null;
  const canSubmit = allChoicesAnswered && codingAnswered && !submitted;

  const relatedLesson = getLesson(quiz.relatedLessonId);
  const lastCoveredLessonId = quiz.coversLessonIds[quiz.coversLessonIds.length - 1];
  const nextLesson = getNextFullLesson(lastCoveredLessonId);

  const correctChoiceCount = choiceQuestions.filter((q) => choiceAnswers[q.id] === q.correctIndex).length;
  const codingCorrect = codingQuestion ? codingWorked === true : true;
  const totalQuestions = quiz.questions.length;
  const score = correctChoiceCount + (codingQuestion ? (codingCorrect ? 1 : 0) : 0);

  const missedQuestionIds = [
    ...choiceQuestions.filter((q) => choiceAnswers[q.id] !== q.correctIndex).map((q) => q.id),
    ...(codingQuestion && !codingCorrect ? [codingQuestion.id] : []),
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    recordQuizResult({ quizId: quiz.id, score, total: totalQuestions, missedQuestionIds });
    if (score / totalQuestions < 0.6) {
      addTopicToReview(quiz.relatedLessonId);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">Quiz</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">{quiz.title}</h1>
        <p className="mt-1 text-sm text-slate-500">
          Covers: {quiz.coversLessonIds.map((id) => getLesson(id)?.title ?? id).join(", ")}
        </p>
      </header>

      {choiceQuestions.map((question, index) => (
        <ChoiceQuestionCard
          key={question.id}
          question={question}
          index={index}
          selectedIndex={choiceAnswers[question.id]}
          submitted={submitted}
          onSelect={(optionIndex) =>
            setChoiceAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))
          }
        />
      ))}

      {codingQuestion && codingQuestion.type === "coding" && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Question {choiceQuestions.length + 1} · Coding
          </p>
          <p className="mb-3 text-sm text-slate-800">{codingQuestion.prompt}</p>
          <textarea
            value={codingAnswer}
            onChange={(e) => setCodingAnswer(e.target.value)}
            spellCheck={false}
            rows={12}
            disabled={submitted}
            className="w-full rounded-xl border border-slate-300 bg-slate-900 p-4 font-mono text-sm text-slate-100 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />

          {!submitted && (
            <div className="mt-3 rounded-lg bg-slate-50 p-3">
              <p className="mb-2 text-sm font-medium text-slate-700">
                Once you have written your solution above, be honest: does it produce the expected behaviour
                below?
              </p>
              <p className="mb-3 text-xs text-slate-500">
                <span className="font-semibold">Expected behaviour: </span>
                {codingQuestion.expectedBehaviour}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCodingWorked(true)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium",
                    codingWorked === true
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-slate-300 text-slate-600 hover:bg-slate-100"
                  )}
                >
                  Yes, it works
                </button>
                <button
                  type="button"
                  onClick={() => setCodingWorked(false)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium",
                    codingWorked === false
                      ? "border-rose-500 bg-rose-500 text-white"
                      : "border-slate-300 text-slate-600 hover:bg-slate-100"
                  )}
                >
                  Not quite
                </button>
              </div>
            </div>
          )}

          {submitted && (
            <div className="mt-4 flex flex-col gap-3">
              <div
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  codingCorrect ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                )}
              >
                {codingCorrect
                  ? "Nice work - you reported this worked as expected."
                  : "No worries - compare your code with the sample solution below and see what's different."}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">Sample solution</p>
                <JavaCodeBlock code={codingQuestion.sampleSolution} label="Main.java (sample solution)" />
              </div>
            </div>
          )}
        </div>
      )}

      {!submitted ? (
        <button
          type="button"
          disabled={!canSubmit}
          onClick={handleSubmit}
          className="self-start rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit quiz
        </button>
      ) : (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
          <h2 className="text-lg font-bold text-indigo-900">
            You scored {score} / {totalQuestions}
          </h2>
          {score === totalQuestions ? (
            <p className="mt-1 text-sm text-indigo-800">
              Excellent - you got every question right. You&apos;re ready to move on.
            </p>
          ) : (
            <p className="mt-1 text-sm text-indigo-800">
              Review the explanations above for anything you missed. Revisiting{" "}
              {relatedLesson ? (
                <Link href={`/course/${relatedLesson.id}`} className="font-semibold underline">
                  {relatedLesson.title}
                </Link>
              ) : (
                "the related lesson"
              )}{" "}
              can help before you continue.
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedLesson && (
              <Link
                href={`/course/${relatedLesson.id}`}
                className="rounded-full border border-indigo-300 px-5 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                Review {relatedLesson.title}
              </Link>
            )}
            {nextLesson && (
              <Link
                href={`/course/${nextLesson.id}`}
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Continue to {nextLesson.title} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ChoiceQuestionCard({
  question,
  index,
  selectedIndex,
  submitted,
  onSelect,
}: {
  question: QuizQuestion & { type: "multiple-choice" | "predict-output" | "find-error" };
  index: number;
  selectedIndex: number | undefined;
  submitted: boolean;
  onSelect: (index: number) => void;
}) {
  const isCorrect = selectedIndex === question.correctIndex;
  const typeLabel =
    question.type === "multiple-choice"
      ? "Multiple choice"
      : question.type === "predict-output"
        ? "Predict the output"
        : "Find the error";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Question {index + 1} · {typeLabel}
      </p>
      <p className="mb-3 text-sm text-slate-800">{question.prompt}</p>

      {"code" in question && question.code && (
        <JavaCodeBlock code={question.code} className="mb-3" maxHeightClassName="max-h-64" />
      )}

      <div className="flex flex-col gap-2">
        {question.options.map((option, optionIndex) => {
          const isSelected = selectedIndex === optionIndex;
          const showAsCorrect = submitted && optionIndex === question.correctIndex;
          const showAsWrong = submitted && isSelected && optionIndex !== question.correctIndex;

          return (
            <button
              key={optionIndex}
              type="button"
              disabled={submitted}
              onClick={() => onSelect(optionIndex)}
              className={cn(
                "rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                isSelected && !submitted && "border-orange-500 bg-orange-50",
                !isSelected && !submitted && "border-slate-200 hover:bg-slate-50",
                showAsCorrect && "border-green-500 bg-green-50 text-green-800",
                showAsWrong && "border-rose-500 bg-rose-50 text-rose-800"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div
          className={cn(
            "mt-3 rounded-lg p-3 text-sm",
            isCorrect ? "bg-green-50 text-green-800" : "bg-amber-50 text-amber-800"
          )}
        >
          <span className="font-semibold">{isCorrect ? "Correct! " : "Not quite. "}</span>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
