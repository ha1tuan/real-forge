import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import IconButton from "./IconButton";

interface DialogProps {
  open?: boolean;
  title: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
  width?: number;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

/** Modal căn giữa trên lớp veil mờ. Phủ phần tử cha gần nhất có `position: relative`. */
export default function Dialog({ open = true, title, subtitle, footer, width = 520, onClose, children, className }: DialogProps) {
  if (!open) return null;
  return (
    <div className="absolute inset-0 z-60 grid place-items-center p-8 bg-scrim [backdrop-filter:var(--blur-veil)]">
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "max-w-full bg-surface-card border-2 border-border-default rounded-sheet shadow-sheet p-8 grid gap-5",
          className,
        )}
        style={{ width }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-1 grid gap-1">
            <h3 className="font-semibold text-h3 leading-snug font-display tracking-display">{title}</h3>
            {subtitle ? <p className="m-0 text-body leading-normal font-body text-text-secondary">{subtitle}</p> : null}
          </div>
          {onClose ? <IconButton icon={X} label="Đóng" variant="ghost" size="sm" onClick={onClose} /> : null}
        </div>
        {children}
        {footer ? <div className="flex justify-end gap-3">{footer}</div> : null}
      </div>
    </div>
  );
}
