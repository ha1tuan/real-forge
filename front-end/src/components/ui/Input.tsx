import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

type InputSize = "sm" | "md" | "lg";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  icon?: LucideIcon;
  suffix?: string;
  invalid?: boolean;
  size?: InputSize;
}

const INPUT_HEIGHTS: Record<InputSize, string> = { sm: "h-8.5", md: "h-10.5", lg: "h-12.5" };

/** Ô nhập một dòng. `className`/`style` áp lên khung bao ngoài. */
export default function Input({ icon, suffix, invalid, size = "md", className, style, ...rest }: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 bg-surface-inset border-2 rounded-control",
        "transition-[border-color,box-shadow] duration-(--dur-fast) ease-standard",
        "focus-within:shadow-[0_0_0_4px_var(--alpha-cyan-16)]",
        invalid ? "border-status-danger" : "border-border-default focus-within:border-border-focus",
        INPUT_HEIGHTS[size],
        className,
      )}
      style={style}
    >
      {icon ? <span className="inline-flex text-text-muted"><Icon icon={icon} size={16} /></span> : null}
      <input
        className={cn(
          "flex-1 min-w-0 bg-transparent border-none outline-none text-text-primary font-medium leading-[1.2] font-body tracking-tight",
          size === "lg" ? "text-body-lg" : "text-body",
        )}
        {...rest}
      />
      {suffix ? <span className="font-semibold text-label leading-[1.2] font-mono tracking-mono text-text-muted">{suffix}</span> : null}
    </div>
  );
}
