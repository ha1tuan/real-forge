import { Check, LoaderCircle, UserCheck, X, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import type { PipelineStep, StepState } from "../../types";
import Icon from "./Icon";

interface PipelineStepperProps {
  steps: PipelineStep[];
  orientation?: "horizontal" | "vertical";
  /** Chỉ hiện ô trạng thái, bỏ nhãn — dùng trong hàng bảng/list. */
  compact?: boolean;
  className?: string;
}

/** Viền · nền · màu glyph của ô trạng thái. */
const STATE_STYLE: Record<StepState, { className: string; icon: LucideIcon | null }> = {
  done: { className: "border-state-machine bg-alpha-cyan-16 text-machine-ink", icon: Check },
  running: { className: "border-state-machine bg-state-machine text-text-on-cyan", icon: LoaderCircle },
  human: { className: "border-action-human bg-action-human text-text-on-magenta", icon: UserCheck },
  failed: { className: "border-status-danger bg-tint-danger text-status-danger", icon: X },
  idle: { className: "border-border-default bg-surface-inset text-text-disabled", icon: null },
};

/** Pipeline 6 bước. Cyan = máy, magenta = cổng con người. */
export default function PipelineStepper({ steps, orientation = "horizontal", compact, className }: PipelineStepperProps) {
  const horizontal = orientation === "horizontal";
  return (
    <ol className={cn("list-none m-0 p-0 flex", horizontal ? "flex-row items-start" : "flex-col items-stretch gap-1", className)}>
      {steps.map((s, i) => {
        const st = STATE_STYLE[s.state];
        const dot = (
          <span className={cn("inline-flex items-center justify-center flex-none rounded-sm border-2", compact ? "size-6.5" : "size-8", st.className)}>
            {st.icon ? <Icon icon={st.icon} size={compact ? 12 : 15} className={s.state === "running" ? "animate-[rf-spin_900ms_linear_infinite]" : undefined} /> :
              <span className="rf-num text-micro">{i + 1}</span>}
          </span>
        );
        const text = (
          <span className="grid gap-0.5 min-w-0">
            <span
              className={cn(
                "font-semibold leading-[1.2] font-display tracking-tight",
                compact ? "text-body-sm" : "text-body",
                s.state === "idle" ? "text-text-muted" : "text-text-primary",
              )}
            >
              {s.label}
            </span>
            {s.meta && !compact ? <span className="font-semibold text-label leading-[1.2] font-mono tracking-mono text-text-muted">{s.meta}</span> : null}
          </span>
        );
        return horizontal ? (
          <li key={s.label} className={cn("flex items-center gap-3 min-w-0", i === steps.length - 1 ? "flex-none" : "flex-1")}>
            <span className="flex items-center gap-3 min-w-0">{dot}{compact ? null : text}</span>
            {i < steps.length - 1 ? (
              <span className={cn("flex-1 h-0.5 min-w-3 rounded-[2px]", s.state === "done" ? "bg-state-machine" : "bg-border-subtle")} />
            ) : null}
          </li>
        ) : (
          <li key={s.label} className="flex items-center gap-3 py-2">{dot}{text}</li>
        );
      })}
    </ol>
  );
}
