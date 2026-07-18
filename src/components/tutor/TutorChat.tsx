"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { TutorChatMessage } from "@/data/types";
import { cn } from "@/lib/utils";

type TutorChatProps = {
  messages: TutorChatMessage[];
  isLoading: boolean;
  onSend: (content: string) => void;
  lessonTitle: string;
};

export function TutorChat({ messages, isLoading, onSend, lessonTitle }: TutorChatProps) {
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim() || isLoading) return;
    onSend(draft.trim());
    setDraft("");
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-sm font-semibold text-slate-800">Ask the Tutor</p>
        <p className="text-xs text-slate-400">Questions about &ldquo;{lessonTitle}&rdquo;</p>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.length === 0 && (
          <p className="text-sm text-slate-400">
            Stuck on something? Ask a question here, or use one of the buttons below the lesson.
          </p>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex", message.role === "student" ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                message.role === "student"
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 text-slate-800"
              )}
            >
              {message.role === "tutor" ? (
                <div className="prose prose-sm prose-slate max-w-none prose-p:my-1 prose-pre:bg-slate-800">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                </div>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl bg-slate-100 px-3.5 py-2 text-sm text-slate-400">
              Tutor is thinking...
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-100 p-3">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask a question about this lesson..."
          className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        />
        <button
          type="submit"
          disabled={isLoading || !draft.trim()}
          className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
