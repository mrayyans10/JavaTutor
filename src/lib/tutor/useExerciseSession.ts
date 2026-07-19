"use client";

import { useCallback, useState } from "react";
import type { Exercise, Lesson, TutorResponse } from "@/data/types";

export type ExerciseGenerationKind = "another-example" | "another-exercise";

/**
 * Owns the "Active Exercise" state for a lesson session: the exercise
 * currently loaded into the Exercise Panel, the history of exercises
 * generated this session, and which ones the student has completed.
 *
 * This is deliberately separate from useTutorChat - exercises are never
 * routed through the chat message list (see architecture note in
 * data/types.ts on TutorResponse).
 */
export function useExerciseSession(lesson: Lesson) {
  const [currentExercise, setCurrentExercise] = useState<Exercise>(lesson.exercise);
  const [exerciseHistory, setExerciseHistory] = useState<Exercise[]>([lesson.exercise]);
  const [completedExerciseIds, setCompletedExerciseIds] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestNextExercise = useCallback(
    async (kind: ExerciseGenerationKind): Promise<Exercise | null> => {
      setIsGenerating(true);
      setError(null);

      try {
        const response = await fetch("/api/tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "chat",
            lessonId: lesson.id,
            message: "",
            action: kind,
            practiceNumber: exerciseHistory.length + 1,
            previousTitles: exerciseHistory.map((e) => e.title),
          }),
        });

        if (!response.ok) throw new Error(`Exercise generation failed (${response.status})`);

        const data: TutorResponse = await response.json();
        if (data.type !== "exercise" || !data.exercise) {
          throw new Error("Unexpected response type from tutor API.");
        }

        setExerciseHistory((prev) => [...prev, data.exercise]);
        setCurrentExercise(data.exercise);
        return data.exercise;
      } catch (err) {
        console.error(err);
        setError("Could not generate a new exercise right now. Please try again in a moment.");
        return null;
      } finally {
        setIsGenerating(false);
      }
    },
    [lesson.id, exerciseHistory]
  );

  const markExerciseCompleted = useCallback((exerciseId: string) => {
    setCompletedExerciseIds((prev) => (prev.includes(exerciseId) ? prev : [...prev, exerciseId]));
  }, []);

  return {
    currentExercise,
    exerciseHistory,
    completedExerciseIds,
    isGenerating,
    error,
    requestNextExercise,
    markExerciseCompleted,
  };
}
