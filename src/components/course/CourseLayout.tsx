import type { ReactNode } from "react";
import { CourseSidebar } from "@/components/course/CourseSidebar";

type CourseLayoutProps = {
  currentLessonId?: string;
  children: ReactNode;
};

export function CourseLayout({ currentLessonId, children }: CourseLayoutProps) {
  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <aside className="hidden w-64 shrink-0 rounded-2xl border border-slate-200 bg-white p-3 md:block lg:w-72">
        <CourseSidebar currentLessonId={currentLessonId} className="max-h-[calc(100vh-7rem)]" />
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
