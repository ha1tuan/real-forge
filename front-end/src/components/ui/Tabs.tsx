import { cn } from "../../lib/utils";
import type { TabItem } from "../../types";
import Icon from "./Icon";

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

/** Hàng tab gạch chân. Tab đang chọn có vạch magenta 3px. */
export default function Tabs({ items, value, onChange, className }: TabsProps) {
  return (
    <div role="tablist" className={cn("flex gap-6 border-b border-border-subtle", className)}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange?.(it.value)}
            className={cn(
              "inline-flex items-center gap-2 bg-transparent border-none pt-0 px-0 pb-3 cursor-pointer text-body leading-none font-display tracking-tight",
              "transition-[color] duration-(--dur-fast) ease-standard",
              active
                ? "text-text-primary font-semibold shadow-[inset_0_-3px_0_0_var(--action-human)]"
                : "text-text-muted font-medium shadow-none",
            )}
          >
            {it.icon ? <Icon icon={it.icon} size={15} /> : null}
            {it.label}
            {it.count != null ? (
              <span className={cn("font-semibold text-label leading-[1.2] font-mono tracking-mono", active ? "text-human-ink" : "text-text-disabled")}>{it.count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
