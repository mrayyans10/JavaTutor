import { notFound } from "next/navigation";
import { getQuiz } from "@/data/quizzes";
import { QuizPanel } from "@/components/quiz/QuizPanel";

type PageProps = {
  params: Promise<{ quizId: string }>;
};

export default async function QuizPage({ params }: PageProps) {
  const { quizId } = await params;
  const quiz = getQuiz(quizId);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <QuizPanel quiz={quiz} />
    </div>
  );
}
