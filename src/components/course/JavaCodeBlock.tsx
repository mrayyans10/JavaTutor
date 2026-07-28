"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

type JavaCodeBlockProps = {
  code: string;
  label?: string;
  className?: string;
  maxHeightClassName?: string;
};

export function JavaCodeBlock({
  code,
  label = "Java",
  className,
  maxHeightClassName = "max-h-[520px]",
}: JavaCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API may be unavailable in some contexts; fail silently.
    }
  };

  return (
    <div className={cn("overflow-hidden rounded-xl border border-slate-800 bg-[#282c34]", className)}>
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900/60 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-xs font-medium text-slate-400">{label}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md px-2 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className={cn("overflow-auto", maxHeightClassName)}>
        <SyntaxHighlighter
          language="java"
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            fontSize: "0.85rem",
            lineHeight: 1.6,
          }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
