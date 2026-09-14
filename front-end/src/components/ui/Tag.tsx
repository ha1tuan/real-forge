import type { HTMLAttributes, MouseEvent } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onRemove?: (e: MouseEvent<HTMLSpanElement>) => void;
}

/** Chip cạnh input: chủ đề, từ khoá, fanpage. Có thể xoá và chọn. */
export default function Tag({ children, onRemove, selected, onClick, className, ...rest }: TagProps) {
  return (
    <span
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "inline-flex items-center gap-2 h-7.5 px-3 rounded-sm border-2 font-medium text-body-sm leading-none font-body",
        "transition-[background,border-color] duration-(--dur-fast) ease-standard",
        selected
          ? "bg-alpha-magenta-16 text-human-ink border-action-human"
          : "bg-surface-raised hover:bg-surface-hover text-text-secondary border-border-subtle",
        onClick ? "cursor-pointer" : "cursor-default",
        className,
      )}
      {...rest}
    >
      {children}
      {onRemove ? (
        <span
          role="button"
          aria-label="Xoá"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          className="inline-flex cursor-pointer opacity-70"
        >
          <Icon icon={X} size={12} />
        </span>
      ) : null}
    </span>
  );
}
