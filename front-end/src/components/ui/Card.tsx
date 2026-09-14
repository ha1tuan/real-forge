import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type CardTone = "default" | "machine" | "human" | "flat";
type CardPadding = "none" | "sm" | "md" | "lg" | "xl";

interface CardProps extends HTMLAttributes<HTMLElement> {
  /** `machine`/`human` tô viền theo chủ thể · `flat` cho card lồng trong card. */
  tone?: CardTone;
  /** none 0 · sm 16px · md 20px · lg 24px (gutter-card, mặc định) · xl 32px. */
  padding?: CardPadding;
  interactive?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
}

const CARD_TONES: Record<CardTone, string> = {
  default: "bg-surface-card border-border-subtle shadow-card",
  machine: "bg-surface-card border-alpha-cyan-16 shadow-card",
  human: "bg-surface-card border-alpha-magenta-16 shadow-card",
  flat: "bg-surface-translucent border-transparent shadow-none",
};

const CARD_PADDINGS: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
  xl: "p-8",
};

/** Khối bề mặt squircle. */
export default function Card({ tone = "default", padding = "lg", interactive, header, footer, children, className, ...rest }: CardProps) {
  return (
    <section
      className={cn(
        "border-2 rounded-card",
        "[transition:transform_var(--dur-base)_var(--ease-out),border-color_var(--dur-fast)_var(--ease-standard)]",
        CARD_TONES[tone],
        CARD_PADDINGS[padding],
        interactive ? "cursor-pointer hover:border-border-strong hover:[transform:translateY(var(--hover-lift))]" : "cursor-default",
        className,
      )}
      {...rest}
    >
      {header ? <header className="flex items-center justify-between gap-4 mb-4">{header}</header> : null}
      {children}
      {footer ? <footer className="mt-5 pt-4 border-t border-border-subtle">{footer}</footer> : null}
    </section>
  );
}
