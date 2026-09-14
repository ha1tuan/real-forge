import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  /** Chuỗi hiển thị góc dưới phải, vd "120 / 600". */
  counter?: string;
}

export default function Textarea({ rows = 5, invalid, counter, className, ...rest }: TextareaProps) {
  return (
    <div className="grid gap-1">
      <textarea
        rows={rows}
        className={cn(
          "bg-surface-inset border-2 rounded-control p-4 text-text-primary text-body leading-relaxed font-body tracking-tight resize-y outline-none",
          "transition-[border-color] duration-(--dur-fast) ease-standard",
          "focus:shadow-[0_0_0_4px_var(--alpha-cyan-16)]",
          invalid ? "border-status-danger" : "border-border-default focus:border-border-focus",
          className,
        )}
        {...rest}
      />
      {counter ? (
        <span className="justify-self-end font-semibold text-label leading-[1.2] font-mono tracking-mono text-text-muted">{counter}</span>
      ) : null}
    </div>
  );
}
