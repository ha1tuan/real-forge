import type { ButtonHTMLAttributes } from "react";
import { LoaderCircle, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

type ButtonVariant = "primary" | "machine" | "secondary" | "ghost" | "danger" | "gradient";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` magenta = quyết định của người · `machine` cyan = kích hoạt AI · `gradient` chỉ 1 lần/màn hình. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  block?: boolean;
  loading?: boolean;
}

const BTN_SIZES: Record<ButtonSize, { className: string; icon: number }> = {
  sm: { className: "h-8 px-3 text-body-sm rounded-sm", icon: 14 },
  md: { className: "h-10 px-5 text-body rounded-md", icon: 16 },
  lg: { className: "h-12.5 px-6 text-body-lg rounded-lg", icon: 18 },
};

/** `hover`/`active` chỉ áp khi nút không bị disabled. */
const BTN_SKINS: Record<ButtonVariant, { base: string; hover: string; active?: string }> = {
  primary: {
    base: "bg-action-human text-text-on-magenta border-transparent shadow-sm",
    hover: "hover:bg-action-human-hover hover:shadow-glow-human",
    active: "active:bg-action-human-press",
  },
  machine: {
    base: "bg-action-machine text-text-on-cyan border-transparent shadow-sm",
    hover: "hover:bg-action-machine-hover hover:shadow-glow-machine",
    active: "active:bg-action-machine-press",
  },
  secondary: {
    base: "bg-surface-raised text-text-primary border-border-default shadow-none",
    hover: "hover:bg-surface-hover hover:border-border-strong",
  },
  ghost: {
    base: "bg-transparent text-text-secondary border-transparent shadow-none",
    hover: "hover:bg-alpha-spark-08",
  },
  danger: {
    base: "bg-transparent text-status-danger border-border-default shadow-none",
    hover: "hover:bg-alpha-spark-08 hover:border-status-danger",
  },
  gradient: {
    base: "bg-gradient-forge text-text-on-gradient border-transparent shadow-card",
    hover: "hover:shadow-raised",
    active: "active:[filter:saturate(1.15)_brightness(.95)]",
  },
};

export default function Button({
  variant = "primary", size = "md", icon, iconRight, block, disabled, loading,
  type = "button", children, className, ...rest
}: ButtonProps) {
  const s = BTN_SIZES[size];
  const skin = BTN_SKINS[variant];
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        "items-center justify-center gap-2 border-2 font-semibold leading-none font-display tracking-tight",
        "[transition:background_var(--dur-fast)_var(--ease-standard),box-shadow_var(--dur-base)_var(--ease-standard),transform_var(--dur-instant)_var(--ease-standard),color_var(--dur-fast)_var(--ease-standard)]",
        block ? "flex w-full" : "inline-flex",
        s.className,
        skin.base,
        disabled ? "cursor-not-allowed opacity-42" : ["cursor-pointer active:[transform:scale(var(--press-scale))]", skin.hover, skin.active],
        className,
      )}
      {...rest}
    >
      {loading ? <Icon icon={LoaderCircle} size={s.icon} className="animate-[rf-spin_900ms_linear_infinite]" /> : icon ? <Icon icon={icon} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon icon={iconRight} size={s.icon} /> : null}
    </button>
  );
}
