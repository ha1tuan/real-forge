import { useState, type LabelHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SwitchProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  /** Controlled. Bỏ trống để dùng `defaultChecked` (uncontrolled). */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: ReactNode;
  /** `machine` khi công tắc bật tự động hoá. */
  tone?: "human" | "machine";
  disabled?: boolean;
}

export default function Switch({ checked, defaultChecked = false, onChange, label, tone = "human", disabled, className, ...rest }: SwitchProps) {
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const on = checked ?? innerChecked;
  const accent = tone === "machine" ? "bg-state-machine border-state-machine" : "bg-action-human border-action-human";
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInnerChecked(!on);
    onChange?.(!on);
  };
  return (
    <label className={cn("inline-flex items-center gap-3", disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer", className)} {...rest}>
      <span
        role="switch"
        aria-checked={on}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
        className={cn(
          "relative w-11 h-6.5 flex-none rounded-pill border-2",
          "transition-[background,border-color] duration-(--dur-base) ease-standard",
          on ? accent : "bg-surface-inset border-border-default",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-4.5 rounded-pill transition-[left] duration-(--dur-base) ease-out",
            on ? "left-5 bg-bg-app" : "left-0.5 bg-border-strong",
          )}
        />
      </span>
      {label ? <span className="font-medium text-body leading-[1.2] font-body text-text-primary">{label}</span> : null}
    </label>
  );
}
