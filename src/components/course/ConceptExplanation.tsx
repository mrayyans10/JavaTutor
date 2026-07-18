import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

type ConceptExplanationProps = {
  markdown: string;
  className?: string;
};

/**
 * Renders lesson markdown (explanation, analogy, syntax notes) with
 * consistent, readable typography for teenage learners: short sections,
 * clear headings, and tables where useful (e.g. data type reference).
 */
export function ConceptExplanation({ markdown, className }: ConceptExplanationProps) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none prose-headings:font-semibold prose-p:leading-relaxed",
        "prose-table:text-sm prose-th:bg-slate-100 prose-code:rounded prose-code:bg-slate-100",
        "prose-code:px-1 prose-code:py-0.5 prose-code:text-orange-700 prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:bg-slate-900",
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
