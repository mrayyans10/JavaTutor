"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { ExerciseAttempt, QuizResult, StudentProgress } from "@/data/types";
import {
  createDefaultProgress,
  progressRepository,
} from "@/lib/progress/progressRepository";

const REPEATED_STRUGGLE_THRESHOLD = 2;

type ProgressContextValue = {
  progress: StudentProgress;
  isLoaded: boolean;
  setCurrentLesson: (lessonId: string) => void;
  markLessonComplete: (lessonId: string) => void;
  recordExerciseAttempt: (attempt: Omit<ExerciseAttempt, "timestamp">) => void;
  addTopicToReview: (lessonId: string) => void;
  removeTopicToReview: (lessonId: string) => void;
  recordQuizResult: (result: Omit<QuizResult, "timestamp">) => void;
  toggleFinalProjectTask: (taskId: string) => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

type LoadState = { progress: StudentProgress; isLoaded: boolean };

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [{ progress, isLoaded }, setState] = useState<LoadState>({
    progress: createDefaultProgress(),
    isLoaded: false,
  });

  useEffect(() => {
    // Reading from localStorage must happen after mount (it is unavailable
    // during server rendering). This one-time sync from an external store
    // is exactly the documented exception to "avoid effects that just set
    // state" - see https://react.dev/learn/you-might-not-need-an-effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ progress: progressRepository.load(), isLoaded: true });
  }, []);

  const persist = useCallback((next: StudentProgress) => {
    setState({ progress: next, isLoaded: true });
    progressRepository.save(next);
  }, []);

  const setCurrentLesson = useCallback(
    (lessonId: string) => {
      persist({
        ...progress,
        currentLessonId: lessonId,
        lastVisited: new Date().toISOString(),
      });
    },
    [progress, persist]
  );

  const markLessonComplete = useCallback(
    (lessonId: string) => {
      if (progress.completedLessonIds.includes(lessonId)) return;
      persist({
        ...progress,
        completedLessonIds: [...progress.completedLessonIds, lessonId],
        lastVisited: new Date().toISOString(),
      });
    },
    [progress, persist]
  );

  const recordExerciseAttempt = useCallback(
    (attempt: Omit<ExerciseAttempt, "timestamp">) => {
      const fullAttempt: ExerciseAttempt = {
        ...attempt,
        timestamp: new Date().toISOString(),
      };

      const previousAttemptsForExercise = progress.exerciseAttempts.filter(
        (a) => a.exerciseId === attempt.exerciseId
      );
      const previousFailures = previousAttemptsForExercise.filter((a) => !a.passed).length;
      const totalFailuresIncludingThis = attempt.passed
        ? previousFailures
        : previousFailures + 1;

      const shouldFlagForReview =
        !attempt.passed && totalFailuresIncludingThis >= REPEATED_STRUGGLE_THRESHOLD;

      const nextTopicsToReview = shouldFlagForReview
        ? Array.from(new Set([...progress.topicsToReview, attempt.lessonId]))
        : progress.topicsToReview;

      const nextExerciseCompletion = attempt.passed
        ? { ...progress.exerciseCompletion, [attempt.exerciseId]: true }
        : progress.exerciseCompletion;

      persist({
        ...progress,
        exerciseAttempts: [...progress.exerciseAttempts, fullAttempt],
        exerciseCompletion: nextExerciseCompletion,
        topicsToReview: nextTopicsToReview,
        lastVisited: new Date().toISOString(),
      });
    },
    [progress, persist]
  );

  const addTopicToReview = useCallback(
    (lessonId: string) => {
      if (progress.topicsToReview.includes(lessonId)) return;
      persist({ ...progress, topicsToReview: [...progress.topicsToReview, lessonId] });
    },
    [progress, persist]
  );

  const removeTopicToReview = useCallback(
    (lessonId: string) => {
      persist({
        ...progress,
        topicsToReview: progress.topicsToReview.filter((id) => id !== lessonId),
      });
    },
    [progress, persist]
  );

  const recordQuizResult = useCallback(
    (result: Omit<QuizResult, "timestamp">) => {
      const fullResult: QuizResult = { ...result, timestamp: new Date().toISOString() };
      persist({
        ...progress,
        quizResults: [
          ...progress.quizResults.filter((r) => r.quizId !== result.quizId),
          fullResult,
        ],
      });
    },
    [progress, persist]
  );

  const toggleFinalProjectTask = useCallback(
    (taskId: string) => {
      persist({
        ...progress,
        finalProjectChecklist: {
          ...progress.finalProjectChecklist,
          [taskId]: !progress.finalProjectChecklist[taskId],
        },
      });
    },
    [progress, persist]
  );

  const resetProgress = useCallback(() => {
    progressRepository.clear();
    setState({ progress: createDefaultProgress(), isLoaded: true });
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      isLoaded,
      setCurrentLesson,
      markLessonComplete,
      recordExerciseAttempt,
      addTopicToReview,
      removeTopicToReview,
      recordQuizResult,
      toggleFinalProjectTask,
      resetProgress,
    }),
    [
      progress,
      isLoaded,
      setCurrentLesson,
      markLessonComplete,
      recordExerciseAttempt,
      addTopicToReview,
      removeTopicToReview,
      recordQuizResult,
      toggleFinalProjectTask,
      resetProgress,
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
