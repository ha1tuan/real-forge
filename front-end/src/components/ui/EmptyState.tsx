import type { ReactNode } from "react";
import { Inbox, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
  className?: string;
}

/** Placeholder khi không có dữ liệu: glyph, một dòng lý do, một hành động. */
export default function EmptyState({ icon = Inbox, title, message, action, className }: EmptyStateProps) {
  return (
    <div className={cn("grid justify-items-center gap-4 py-16 px-6 text-center", className)}>
      <span className="inline-flex items-center justify-center size-14 rounded-lg bg-alpha-spark-04 border-2 border-border-subtle text-text-muted">
        <Icon icon={icon} size={22} />
      </span>
      <div className="grid gap-2 max-w-[380px]">
        <strong className="font-semibold text-h4 leading-[1.3] font-display tracking-tight">{title}</strong>
        {message ? <span className="text-body-sm leading-[1.55] font-body text-text-muted">{message}</span> : null}
      </div>
      {action}
    </div>
  );
}
