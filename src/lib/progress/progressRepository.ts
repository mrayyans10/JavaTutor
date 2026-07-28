import type { StudentProgress } from "@/data/types";

const STORAGE_KEY = "javatutor.progress.v1";

export function createDefaultProgress(): StudentProgress {
  return {
    currentLessonId: null,
    completedLessonIds: [],
    exerciseAttempts: [],
    exerciseCompletion: {},
    topicsToReview: [],
    commonErrors: {},
    quizResults: [],
    finalProjectChecklist: {},
    lastVisited: null,
  };
}

/**
 * Abstraction over where student progress is persisted.
 *
 * The MVP uses browser local storage (see LocalStorageProgressRepository
 * below). A future version can add a repository backed by a real database
 * / API without changing any component code, as long as it implements
 * this same interface.
 */
export interface ProgressRepository {
  load(): StudentProgress;
  save(progress: StudentProgress): void;
  clear(): void;
}

function mergeWithDefaults(partial: Partial<StudentProgress>): StudentProgress {
  return { ...createDefaultProgress(), ...partial };
}

export class LocalStorageProgressRepository implements ProgressRepository {
  load(): StudentProgress {
    if (typeof window === "undefined") return createDefaultProgress();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultProgress();
      const parsed = JSON.parse(raw) as Partial<StudentProgress>;
      return mergeWithDefaults(parsed);
    } catch {
      return createDefaultProgress();
    }
  }

  save(progress: StudentProgress): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Local storage may be unavailable (e.g. private browsing quota).
      // Silently ignore - progress simply won't persist across reloads.
    }
  }

  clear(): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export const progressRepository: ProgressRepository = new LocalStorageProgressRepository();
