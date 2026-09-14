import type { ReactNode } from "react";
import { Bell, Check, OctagonAlert, TriangleAlert, X, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import type { ToastTone } from "../../types";
import Icon from "./Icon";
import IconButton from "./IconButton";

interface ToastProps {
  tone?: ToastTone;
  title: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  className?: string;
}

const TOAST_TONE: Record<ToastTone, [string, LucideIcon]> = {
  info: ["text-machine-ink", Bell],
  success: ["text-status-success", Check],
  warning: ["text-status-warning", TriangleAlert],
  danger: ["text-status-danger", OctagonAlert],
};

/** Thông báo góc dưới phải. */
export default function Toast({ tone = "info", title, message, action, onClose, className }: ToastProps) {
  const [accent, icon] = TOAST_TONE[tone];
  return (
    <div
      role="status"
      className={cn(
        "flex gap-4 items-start w-[380px] p-4 bg-surface-raised border-2 border-border-default rounded-lg shadow-raised",
        className,
      )}
    >
      <span className={cn("inline-flex items-center justify-center size-8 flex-none rounded-sm bg-alpha-spark-08", accent)}>
        <Icon icon={icon} size={16} />
      </span>
      <div className="flex-1 grid gap-1 min-w-0">
        <strong className="font-semibold text-body leading-[1.3] font-display tracking-tight">{title}</strong>
        {message ? <span className="text-body-sm leading-normal font-body text-text-secondary">{message}</span> : null}
        {action ? <div className="mt-1">{action}</div> : null}
      </div>
      {onClose ? <IconButton icon={X} label="Đóng" size="sm" variant="ghost" onClick={onClose} /> : null}
    </div>
  );
}
