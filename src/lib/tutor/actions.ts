export type FollowUpAction =
  | "explain-again"
  | "simpler-explanation"
  | "another-example"
  | "hint"
  | "another-exercise"
  | "more-detail"
  | "next-topic";

export const FOLLOW_UP_ACTION_LABELS: Record<FollowUpAction, string> = {
  "explain-again": "Explain this concept again",
  "simpler-explanation": "Show a simpler explanation",
  "another-example": "Show another example",
  hint: "Give me a hint",
  "another-exercise": "Give me another exercise",
  "more-detail": "Teach me more about this concept",
  "next-topic": "Proceed to the next topic",
};

export const DEFAULT_FOLLOW_UP_ACTIONS: FollowUpAction[] = [
  "explain-again",
  "simpler-explanation",
  "another-example",
  "hint",
  "another-exercise",
  "more-detail",
  "next-topic",
];
