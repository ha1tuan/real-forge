import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import type { SelectOption } from "../../types";
import Icon from "./Icon";

type SelectSize = "sm" | "md" | "lg";

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options?: SelectOption[];
  invalid?: boolean;
  size?: SelectSize;
}

const SELECT_HEIGHTS: Record<SelectSize, string> = { sm: "h-8.5", md: "h-10.5", lg: "h-12.5" };

/** Select native với khung squircle. `className`/`style` áp lên khung bao ngoài. */
export default function Select({ options = [], invalid, size = "md", className, style, ...rest }: SelectProps) {
  return (
    <div
      className={cn(
        "relative flex items-center bg-surface-inset border-2 rounded-control",
        invalid ? "border-status-danger" : "border-border-default focus-within:border-border-focus",
        SELECT_HEIGHTS[size],
        className,
      )}
      style={style}
    >
      <select
        className="appearance-none flex-1 h-full bg-transparent border-none outline-none py-0 pr-10 pl-4 text-text-primary font-medium text-body leading-none font-body cursor-pointer"
        {...rest}
      >
        {options.map((o) => {
          const v = typeof o === "string" ? o : o.value;
          const l = typeof o === "string" ? o : o.label;
          return <option key={v} value={v} className="bg-option-bg text-text-primary">{l}</option>;
        })}
      </select>
      <span className="absolute right-4 inline-flex text-text-muted pointer-events-none">
        <Icon icon={ChevronDown} size={16} />
      </span>
    </div>
  );
}
