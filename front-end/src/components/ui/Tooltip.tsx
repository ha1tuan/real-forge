import { useState, type ReactNode } from "react";
import { cn } from "../../lib/utils";

type TooltipSide = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  label: ReactNode;
  side?: TooltipSide;
  children: ReactNode;
  className?: string;
}

const TOOLTIP_SIDES: Record<TooltipSide, string> = {
  top: "bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2",
  bottom: "top-[calc(100%+8px)] left-1/2 -translate-x-1/2",
  left: "right-[calc(100%+8px)] top-1/2 -translate-y-1/2",
  right: "left-[calc(100%+8px)] top-1/2 -translate-y-1/2",
};

/** Nhãn khi hover. Mono, in hoa, một dòng. */
export default function Tooltip({ label, side = "top", children, className }: TooltipProps) {
  const [show, setShow] = useState(false);
  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={cn("relative inline-flex", className)}
    >
      {children}
      {show ? (
        <span
          role="tooltip"
          className={cn(
            "rf-label absolute z-40 px-3 py-1 whitespace-nowrap bg-text-primary text-bg-app border border-border-default rounded-xs shadow-card",
            TOOLTIP_SIDES[side],
          )}
        >
          {label}
        </span>
      ) : null}
    </span>
  );
}
