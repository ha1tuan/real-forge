import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import type { BadgeTone } from "../../types";
import Icon from "./Icon";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  icon?: LucideIcon;
  dot?: boolean;
  solid?: boolean;
}

/** `soft` nền nhạt + chữ màu · `solid` nền màu + chữ bg-app · `dot` màu chấm ở dạng soft. */
const BADGE_TONES: Record<BadgeTone, { soft: string; solid: string; dot: string }> = {
  neutral: { soft: "bg-alpha-spark-08 text-text-secondary", solid: "bg-text-secondary", dot: "bg-text-secondary" },
  human: { soft: "bg-alpha-magenta-16 text-human-ink", solid: "bg-human-ink", dot: "bg-human-ink" },
  machine: { soft: "bg-alpha-cyan-16 text-machine-ink", solid: "bg-machine-ink", dot: "bg-machine-ink" },
  success: { soft: "bg-tint-success text-status-success", solid: "bg-status-success", dot: "bg-status-success" },
  warning: { soft: "bg-tint-warning text-status-warning", solid: "bg-status-warning", dot: "bg-status-warning" },
  danger: { soft: "bg-tint-danger text-status-danger", solid: "bg-status-danger", dot: "bg-status-danger" },
  idle: { soft: "bg-alpha-spark-04 text-text-muted", solid: "bg-text-muted", dot: "bg-text-muted" },
};

/** Pill trạng thái mono, chữ in hoa. */
export default function Badge({ tone = "neutral", icon, dot, solid, children, className, ...rest }: BadgeProps) {
  const t = BADGE_TONES[tone];
  return (
    <span
      className={cn(
        "rf-label inline-flex items-center gap-1 h-6 px-3 rounded-pill whitespace-nowrap",
        solid ? [t.solid, "text-bg-app"] : t.soft,
        className,
      )}
      {...rest}
    >
      {dot ? <span className={cn("size-1.5 rounded-pill", solid ? "bg-bg-app" : t.dot)} /> : null}
      {icon ? <Icon icon={icon} size={12} /> : null}
      {children}
    </span>
  );
}
