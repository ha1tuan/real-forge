import { useState, type ChangeEvent, type LabelHTMLAttributes, type ReactNode } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

interface CheckboxProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  /** Controlled. Bỏ trống để dùng `defaultChecked` (uncontrolled). */
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  label?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ checked, defaultChecked = false, indeterminate, label, description, disabled, onChange, className, ...rest }: CheckboxProps) {
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const isChecked = checked ?? innerChecked;
  const on = isChecked || indeterminate;
  return (
    <label className={cn("inline-flex items-start gap-3", disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer", className)} {...rest}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={(e) => { if (checked === undefined) setInnerChecked(e.target.checked); onChange?.(e); }}
        className="absolute opacity-0 size-0"
      />
      <span
        className={cn(
          "inline-flex items-center justify-center size-5 flex-none mt-px rounded-xs border-2 text-text-on-magenta",
          "transition-[background,border-color] duration-(--dur-fast) ease-standard",
          on ? "bg-action-human border-action-human" : "bg-surface-inset border-border-default",
        )}
      >
        {indeterminate ? <Icon icon={Minus} size={13} /> : isChecked ? <Icon icon={Check} size={13} /> : null}
      </span>
      {label ? (
        <span className="grid gap-0.5">
          <span className="font-medium text-body leading-[1.35] font-body text-text-primary">{label}</span>
          {description ? <span className="text-body-sm leading-[1.45] font-body text-text-muted">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
