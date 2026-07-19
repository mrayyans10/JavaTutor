import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, isFullLesson } from "@/data/course";
import { CourseLayout } from "@/components/course/CourseLayout";
import { LessonViewer } from "@/components/course/LessonViewer";

type PageProps = {
  params: Promise<{ lessonId: string }>;
};

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = getLesson(lessonId);

  if (!lesson) {
    notFound();
  }

  if (!isFullLesson(lesson)) {
    return (
      <CourseLayout currentLessonId={lessonId}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">Coming soon</p>
          <h1 className="mb-3 text-2xl font-bold text-slate-900">{lesson.title}</h1>
          <p className="text-slate-600">
            {lesson.note ??
              "This lesson is part of the full curriculum and will be added in a future update."}
          </p>
          <Link
            href="/course"
            className="mt-6 inline-block rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Back to course overview
          </Link>
        </div>
      </CourseLayout>
    );
  }

  return (
    <CourseLayout currentLessonId={lessonId}>
      {/* key forces a fresh LessonViewer (chat history + exercise session) per lesson. */}
      <LessonViewer lesson={lesson} key={lesson.id} />
    </CourseLayout>
  );
}
