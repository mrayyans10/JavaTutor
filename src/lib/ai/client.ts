import OpenAI from "openai";
import type { EvaluationResult } from "@/data/types";

const DEFAULT_MODEL = process.env.AI_MODEL || "gpt-4o-mini";

let cachedClient: OpenAI | null = null;

/**
 * The AI API key is only ever read on the server (this module is never
 * imported from a "use client" file) and is never sent to the browser.
 */
export function isAIConfigured(): boolean {
  return !!process.env.OPENAI_API_KEY;
}

function getClient(): OpenAI {
  if (!cachedClient) {
    cachedClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return cachedClient;
}

export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export async function requestChatCompletion(messages: ChatMessage[]): Promise<string> {
  const client = getClient();
  const response = await client.chat.completions.create({
    model: DEFAULT_MODEL,
    messages,
    temperature: 0.4,
  });
  return response.choices[0]?.message?.content?.trim() ?? "";
}

/**
 * Parses the AI's evaluation JSON response into our EvaluationResult shape.
 * Falls back defensively if the model returns slightly malformed JSON
 * (e.g. wrapped in a markdown code fence).
 */
export function parseEvaluationResponse(raw: string): Omit<EvaluationResult, "source"> | null {
  const cleaned = raw
    .trim()
    .replace(/^```(json)?/i, "")
    .replace(/```$/, "")
    .trim();

  try {
    const parsed = JSON.parse(cleaned);
    return {
      attemptedConcept: !!parsed.attemptedConcept,
      correctness: parsed.correctness ?? "partially-correct",
      whatYouDidCorrectly: Array.isArray(parsed.whatYouDidCorrectly) ? parsed.whatYouDidCorrectly : [],
      whatNeedsImprovement: Array.isArray(parsed.whatNeedsImprovement) ? parsed.whatNeedsImprovement : [],
      firstHint: parsed.firstHint ?? undefined,
      secondHint: parsed.secondHint ?? undefined,
      conceptToReview: parsed.conceptToReview ?? "this lesson",
      suggestedNextAction: parsed.suggestedNextAction ?? "Keep practicing this concept.",
      errorType: parsed.errorType ?? "none",
    };
  } catch {
    return null;
  }
}
