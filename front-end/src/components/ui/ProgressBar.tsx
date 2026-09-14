import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ProgressTone = "gradient" | "machine" | "human";

interface ProgressBarProps {
  value?: number;
  /** Gradient forge chỉ được dùng ở đây (và hero). */
  tone?: ProgressTone;
  height?: number;
  label?: ReactNode;
  className?: string;
}

const PROGRESS_FILLS: Record<ProgressTone, string> = {
  gradient: "bg-gradient-forge",
  machine: "bg-state-machine",
  human: "bg-action-human",
};

export default function ProgressBar({ value = 0, tone = "gradient", height = 8, label, className }: ProgressBarProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      {label ? (
        <div className="rf-label flex justify-between">
          <span>{label}</span><span className="rf-num">{Math.round(value)}%</span>
        </div>
      ) : null}
      {/* height/width tính từ props nên giữ inline */}
      <div className="rounded-pill bg-surface-inset overflow-hidden" style={{ height }}>
        <div
          className={cn("h-full rounded-pill transition-[width] duration-(--dur-slow) ease-out", PROGRESS_FILLS[tone])}
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}
