"use client";

import { DEFAULT_FOLLOW_UP_ACTIONS, FOLLOW_UP_ACTION_LABELS } from "@/lib/tutor/actions";
import type { FollowUpAction } from "@/lib/tutor/actions";
import { cn } from "@/lib/utils";

type NextActionButtonsProps = {
  onSelect: (action: FollowUpAction) => void;
  actions?: FollowUpAction[];
  disabledActions?: FollowUpAction[];
  className?: string;
};

const ACTION_STYLES: Record<FollowUpAction, string> = {
  "explain-again": "border-slate-300 text-slate-700 hover:bg-slate-100",
  "simpler-explanation": "border-slate-300 text-slate-700 hover:bg-slate-100",
  "another-example": "border-slate-300 text-slate-700 hover:bg-slate-100",
  hint: "border-amber-300 text-amber-800 bg-amber-50 hover:bg-amber-100",
  "another-exercise": "border-slate-300 text-slate-700 hover:bg-slate-100",
  "more-detail": "border-slate-300 text-slate-700 hover:bg-slate-100",
  "next-topic": "border-orange-500 bg-orange-500 text-white hover:bg-orange-600",
};

export function NextActionButtons({
  onSelect,
  actions = DEFAULT_FOLLOW_UP_ACTIONS,
  disabledActions = [],
  className,
}: NextActionButtonsProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-sm font-semibold text-slate-700">What would you like to do next?</p>
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => {
          const isDisabled = disabledActions.includes(action);
          return (
            <button
              key={action}
              type="button"
              disabled={isDisabled}
              onClick={() => onSelect(action)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                ACTION_STYLES[action]
              )}
            >
              {FOLLOW_UP_ACTION_LABELS[action]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
