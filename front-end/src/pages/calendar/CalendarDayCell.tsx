import { cn } from "../../lib/utils";
import type { ScheduledPost } from "../../types";
import { STATE_DOT } from "./stateDot";

interface CalendarDayCellProps {
  day: number;
  inMonth: boolean;
  isToday: boolean;
  posts: ScheduledPost[];
  lastInRow: boolean;
  inLastRow: boolean;
}

export default function CalendarDayCell({ day, inMonth, isToday, posts, lastInRow, inLastRow }: CalendarDayCellProps) {
  return (
    <div
      className={cn(
        "min-h-[116px] p-3 grid gap-2 content-start border-border-subtle",
        !lastInRow && "border-r",
        !inLastRow && "border-b",
        isToday && "bg-alpha-magenta-16",
        !inMonth && "opacity-35",
      )}
    >
      <span className={cn("rf-num text-body-sm leading-[normal]", isToday ? "text-human-ink" : "text-text-muted")}>
        {inMonth ? String(day).padStart(2, "0") : ""}
      </span>
      {posts.map((p) => (
        <div key={p.title} className="grid gap-[3px] p-2 rounded-sm bg-surface-raised border border-border-subtle cursor-pointer">
          <span className="flex items-center gap-1.5">
            <span className={cn("size-1.5 rounded-pill flex-none", STATE_DOT[p.state])} />
            <span className="rf-num text-micro text-text-muted">{p.t}</span>
          </span>
          <span className="font-medium text-body-sm leading-[1.25] font-body truncate">{p.title}</span>
        </div>
      ))}
    </div>
  );
}
