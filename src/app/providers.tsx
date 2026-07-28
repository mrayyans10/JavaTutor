"use client";

import type { ReactNode } from "react";
import { ProgressProvider } from "@/lib/progress/ProgressContext";

export function Providers({ children }: { children: ReactNode }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}
