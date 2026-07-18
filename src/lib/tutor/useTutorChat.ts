"use client";

import { useCallback, useState } from "react";
import type { TutorChatMessage } from "@/data/types";
import type { FollowUpAction } from "@/lib/tutor/actions";
import { FOLLOW_UP_ACTION_LABELS } from "@/lib/tutor/actions";
import { generateId } from "@/lib/utils";

export function useTutorChat(lessonId: string) {
  const [messages, setMessages] = useState<TutorChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const send = useCallback(
    async (content: string, action?: FollowUpAction) => {
      const studentMessage: TutorChatMessage = {
        id: generateId("msg"),
        role: "student",
        content: action ? content || FOLLOW_UP_ACTION_LABELS[action] : content,
        timestamp: new Date().toISOString(),
      };

      const historySoFar = [...messages, studentMessage];
      setMessages(historySoFar);
      setIsLoading(true);

      try {
        const response = await fetch("/api/tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "chat",
            lessonId,
            message: content,
            action,
            history: historySoFar,
          }),
        });

        if (!response.ok) throw new Error(`Chat request failed (${response.status})`);

        const data: { reply: string } = await response.json();
        const tutorMessage: TutorChatMessage = {
          id: generateId("msg"),
          role: "tutor",
          content: data.reply,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, tutorMessage]);
      } catch (error) {
        console.error(error);
        const errorMessage: TutorChatMessage = {
          id: generateId("msg"),
          role: "tutor",
          content:
            "Sorry, I couldn't reach the tutor service just now. Please check your connection and try again.",
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [lessonId, messages]
  );

  const sendAction = useCallback((action: FollowUpAction) => send("", action), [send]);
  const sendMessage = useCallback((content: string) => send(content), [send]);

  return { messages, isLoading, sendAction, sendMessage };
}
