import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
}

/** Nhãn + gợi ý + lỗi, bọc quanh mọi control của form. */
export default function Field({ label, hint, error, required, htmlFor, children, className, ...rest }: FieldProps) {
  return (
    <div className={cn("grid gap-2", className)} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} className="rf-label flex gap-1">
          {label}{required ? <span className="text-action-human">*</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span className="font-medium text-body-sm leading-[1.4] font-body text-status-danger">{error}</span>
      ) : hint ? (
        <span className="text-body-sm leading-[1.4] font-body text-text-muted">{hint}</span>
      ) : null}
    </div>
  );
}
