import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

type IconButtonVariant = "primary" | "machine" | "secondary" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  /** Bắt buộc — dùng làm aria-label + title. */
  label: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

const IB_SIZES: Record<IconButtonSize, { className: string; icon: number }> = {
  sm: { className: "size-7.5", icon: 14 },
  md: { className: "size-9.5", icon: 16 },
  lg: { className: "size-11.5", icon: 20 },
};

const IB_TONES: Record<IconButtonVariant, { base: string; hover: string }> = {
  primary: { base: "bg-action-human text-text-on-magenta border-transparent", hover: "hover:bg-action-human-hover" },
  machine: { base: "bg-action-machine text-text-on-cyan border-transparent", hover: "hover:bg-action-machine-hover" },
  ghost: { base: "bg-transparent text-text-secondary border-transparent", hover: "hover:bg-alpha-spark-08" },
  secondary: { base: "bg-surface-raised text-text-primary border-border-default", hover: "hover:bg-surface-hover hover:border-border-strong" },
};

/** Nút vuông squircle chứa một glyph Lucide. */
export default function IconButton({ icon, size = "md", variant = "secondary", label, disabled, type = "button", className, ...rest }: IconButtonProps) {
  const s = IB_SIZES[size];
  const tone = IB_TONES[variant];
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-md border-2",
        "[transition:background_var(--dur-fast)_var(--ease-standard),transform_var(--dur-instant)_var(--ease-standard)]",
        "active:[transform:scale(var(--press-scale))]",
        s.className,
        tone.base,
        disabled ? "cursor-not-allowed opacity-42" : ["cursor-pointer", tone.hover],
        className,
      )}
      {...rest}
    >
      <Icon icon={icon} size={s.icon} />
    </button>
  );
}
