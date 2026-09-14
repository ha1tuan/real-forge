import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import EchoSpark, { SPARK_D } from "./EchoSpark";

interface EchoMarkProps extends HTMLAttributes<HTMLSpanElement> {
  /** `wordmark` (tile + tên) · `glyph` (chỉ tile) · `echo` (spark trần, chỉ làm accent). */
  variant?: "wordmark" | "glyph" | "echo";
  size?: number;
  tagline?: string;
}

/** Logo ReelForge. */
export default function EchoMark({ variant = "wordmark", size = 40, tagline, className, style, ...rest }: EchoMarkProps) {
  const tile = (
    <svg viewBox="0 0 512 512" width={size} height={size} role="img" aria-label="ReelForge" className="block flex-none">
      <rect width="512" height="512" rx="116" fill="#120A1F" />
      <g transform="translate(30 26)"><path d={SPARK_D} fill="#22D3EE" opacity="0.78" stroke="#22D3EE" strokeWidth="28" strokeLinejoin="round" /></g>
      <g transform="translate(-30 -26)"><path d={SPARK_D} fill="#F0348C" opacity="0.82" stroke="#F0348C" strokeWidth="28" strokeLinejoin="round" /></g>
      <path d={SPARK_D} fill="#FFF6EE" stroke="#FFF6EE" strokeWidth="28" strokeLinejoin="round" />
    </svg>
  );
  if (variant === "echo") return <EchoSpark size={size} className={className} style={style} />;
  if (variant === "glyph") return <span className={cn("inline-flex", className)} style={style} {...rest}>{tile}</span>;
  return (
    <span className={cn("inline-flex items-center gap-3", className)} style={style} {...rest}>
      {tile}
      <span className="grid gap-0.5">
        {/* cỡ chữ = 50% kích thước tile — tính lúc runtime nên giữ inline */}
        <span className="font-bold leading-none font-display tracking-display text-text-primary" style={{ fontSize: Math.round(size * 0.5) }}>ReelForge</span>
        {tagline ? <span className="rf-label">{tagline}</span> : null}
      </span>
    </span>
  );
}
