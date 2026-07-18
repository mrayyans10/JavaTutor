import type { EvaluationResult, Exercise, Lesson } from "@/data/types";
import {
  conceptLikelyAttempted,
  hasBalancedBraces,
  studentCodeBodyIsEmpty,
} from "@/lib/evaluation/conceptPatterns";

export type EvaluationInput = {
  lesson: Lesson;
  exercise: Exercise;
  submittedCode: string;
  compilerOutput?: string;
};

/**
 * Rule-based evaluator used when no AI provider is configured, or as a
 * fallback if the AI request fails. It cannot truly compile or run Java,
 * so it relies on pattern matching against the code the student pasted in,
 * plus any compiler output/errors the student pasted alongside it.
 *
 * This keeps the product fully usable without any AI key, and the same
 * EvaluationResult shape is used everywhere so the UI never needs to know
 * which evaluator produced a result.
 */
export function evaluateSubmissionWithMockEvaluator(input: EvaluationInput): EvaluationResult {
  const { exercise, submittedCode, compilerOutput } = input;
  const trimmedCode = submittedCode.trim();

  if (trimmedCode.length === 0) {
    return {
      attemptedConcept: false,
      correctness: "incorrect",
      whatYouDidCorrectly: [],
      whatNeedsImprovement: ["No code was submitted yet."],
      firstHint:
        "Start by replacing the placeholder comments with real Java code between the STUDENT CODE markers.",
      conceptToReview: exercise.conceptsTested[0] ?? "the current lesson",
      suggestedNextAction: "Write your attempt, then submit it again.",
      errorType: "none",
      source: "mock",
    };
  }

  const isEmptyAttempt = studentCodeBodyIsEmpty(trimmedCode);
  const braceBalance = hasBalancedBraces(trimmedCode);

  const conceptResults = exercise.conceptsTested.map((concept) => ({
    concept,
    attempted: conceptLikelyAttempted(concept, trimmedCode),
  }));
  const attemptedCount = conceptResults.filter((c) => c.attempted).length;
  const attemptedConcept = !isEmptyAttempt && attemptedCount > 0;

  const mentionsCompilerError =
    !!compilerOutput &&
    /error|exception|cannot find symbol|expected/i.test(compilerOutput);

  const whatYouDidCorrectly: string[] = [];
  const whatNeedsImprovement: string[] = [];

  if (!isEmptyAttempt) {
    whatYouDidCorrectly.push("You wrote code inside the student code section instead of leaving it empty.");
  }
  if (braceBalance) {
    whatYouDidCorrectly.push("Your braces, parentheses and brackets all appear to be balanced.");
  } else {
    whatNeedsImprovement.push(
      "It looks like a brace `{`, parenthesis `(`, or bracket `[` may be missing its matching closing symbol."
    );
  }

  conceptResults.forEach(({ concept, attempted }) => {
    if (attempted) {
      whatYouDidCorrectly.push(`Your code appears to use ${concept}, which this exercise is testing.`);
    } else {
      whatNeedsImprovement.push(`I could not clearly find ${concept} in your code yet.`);
    }
  });

  if (mentionsCompilerError && compilerOutput) {
    whatNeedsImprovement.push("The compiler output you pasted mentions an error - see the hint below.");
  }

  let correctness: EvaluationResult["correctness"] = "incorrect";
  if (isEmptyAttempt) {
    correctness = "incorrect";
  } else if (attemptedCount === conceptResults.length && braceBalance && !mentionsCompilerError) {
    correctness = "correct";
  } else if (attemptedCount > 0) {
    correctness = "partially-correct";
  }

  let errorType: EvaluationResult["errorType"] = "none";
  if (mentionsCompilerError) {
    errorType = "syntax";
  } else if (!braceBalance) {
    errorType = "syntax";
  } else if (correctness === "partially-correct") {
    errorType = "logical";
  }

  const missingConcept = conceptResults.find((c) => !c.attempted)?.concept;

  const firstHint = isEmptyAttempt
    ? "Replace the // TODO comments with real Java statements between the STUDENT CODE markers."
    : !braceBalance
      ? "Count your opening and closing braces `{ }` carefully - one of them is likely missing a partner."
      : missingConcept
        ? `Take another look at how this lesson's example uses ${missingConcept}, then try adding that to your solution.`
        : "Re-read the exercise's expected behaviour and compare it line by line with your output.";

  const secondHint =
    correctness !== "correct" && missingConcept
      ? `Try writing just the ${missingConcept} part on its own first, test it in your head with one example value, then plug it back into your full solution.`
      : undefined;

  const suggestedNextAction =
    correctness === "correct"
      ? "Great work - you can move on to the next topic, or try another exercise for extra practice."
      : correctness === "partially-correct"
        ? "Revise the part mentioned above and submit again - you are close."
        : "Review the worked example in this lesson, then try rewriting your solution from scratch.";

  return {
    attemptedConcept,
    correctness,
    whatYouDidCorrectly:
      whatYouDidCorrectly.length > 0 ? whatYouDidCorrectly : ["You made an attempt - that's a great first step."],
    whatNeedsImprovement,
    firstHint,
    secondHint,
    conceptToReview: missingConcept ?? exercise.conceptsTested[0] ?? "this lesson",
    suggestedNextAction,
    errorType,
    source: "mock",
  };
}
