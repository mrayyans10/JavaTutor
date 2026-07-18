import { module1 } from "@/data/modules/module1";
import { module2 } from "@/data/modules/module2";
import { module3 } from "@/data/modules/module3";
import { module4 } from "@/data/modules/module4";
import { module5 } from "@/data/modules/module5";
import { module6 } from "@/data/modules/module6";
import { module7 } from "@/data/modules/module7";
import { module8 } from "@/data/modules/module8";
import type { CourseLesson, CourseModule, Lesson } from "@/data/types";
import { isFullLesson } from "@/data/types";

export const courseModules: CourseModule[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
].sort((a, b) => a.order - b.order);

export const allLessons: CourseLesson[] = courseModules.flatMap((mod) =>
  [...mod.lessons].sort((a, b) => a.order - b.order)
);

export const allFullLessons: Lesson[] = allLessons.filter(isFullLesson);

export function getModule(moduleId: string): CourseModule | undefined {
  return courseModules.find((m) => m.id === moduleId);
}

export function getLesson(lessonId: string): CourseLesson | undefined {
  return allLessons.find((l) => l.id === lessonId);
}

export function getFullLesson(lessonId: string): Lesson | undefined {
  const lesson = getLesson(lessonId);
  return lesson && isFullLesson(lesson) ? lesson : undefined;
}

export function getLessonIndex(lessonId: string): number {
  return allLessons.findIndex((l) => l.id === lessonId);
}

export function getNextLesson(lessonId: string): CourseLesson | undefined {
  const index = getLessonIndex(lessonId);
  if (index === -1 || index === allLessons.length - 1) return undefined;
  return allLessons[index + 1];
}

export function getPreviousLesson(lessonId: string): CourseLesson | undefined {
  const index = getLessonIndex(lessonId);
  if (index <= 0) return undefined;
  return allLessons[index - 1];
}

/** The next full (interactive) lesson after the given lesson, skipping placeholders. */
export function getNextFullLesson(lessonId: string): Lesson | undefined {
  const index = getLessonIndex(lessonId);
  if (index === -1) return undefined;
  for (let i = index + 1; i < allLessons.length; i++) {
    if (isFullLesson(allLessons[i])) return allLessons[i] as Lesson;
  }
  return undefined;
}

export const firstLesson: Lesson = allFullLessons[0];

export function getModuleProgressCount(moduleId: string, completedLessonIds: string[]): {
  completed: number;
  total: number;
} {
  const mod = getModule(moduleId);
  if (!mod) return { completed: 0, total: 0 };
  const fullLessons = mod.lessons.filter(isFullLesson);
  const completed = fullLessons.filter((l) => completedLessonIds.includes(l.id)).length;
  return { completed, total: fullLessons.length };
}

export function getOverallProgress(completedLessonIds: string[]): {
  completed: number;
  total: number;
  percent: number;
} {
  const total = allFullLessons.length;
  const completed = allFullLessons.filter((l) => completedLessonIds.includes(l.id)).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}

export { isFullLesson };
export type { CourseLesson, CourseModule, Lesson };
