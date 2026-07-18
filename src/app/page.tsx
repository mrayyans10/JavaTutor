import Link from "next/link";
import { JavaCodeBlock } from "@/components/course/JavaCodeBlock";

const HERO_CODE = `public class Main {

    public static void main(String[] args) {
        System.out.println("Welcome to the School Activity Management System");
        System.out.println("Let's learn Java, one step at a time.");
    }
}`;

const HIGHLIGHTS = [
  {
    title: "Learn by building one real project",
    body: "Every concept connects back to a School Activity Management System you build gradually - students, courses, clubs, marks and more.",
  },
  {
    title: "Hints before answers",
    body: "When you submit code, the tutor reviews it, explains what's right and wrong, and gives hints before ever showing a full solution.",
  },
  {
    title: "Beginner-first explanations",
    body: "Every lesson explains the what, why and when in plain English, with a real-world analogy before any code.",
  },
];

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            For students new to programming
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Learn Java step by step, with an AI tutor by your side.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            JavaTutor teaches high-school students Java from the very beginning - no experience needed. Read a
            simple explanation, see a real example, then write your own code and get friendly, honest feedback.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/course"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Start learning →
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              View my progress
            </Link>
          </div>
        </div>
        <JavaCodeBlock code={HERO_CODE} label="Main.java" />
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
