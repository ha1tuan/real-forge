import type { ChangeEvent, LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface RadioProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  checked?: boolean;
  label?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Radio({ checked, label, description, disabled, name, onChange, className, ...rest }: RadioProps) {
  return (
    <label className={cn("inline-flex items-start gap-3", disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer", className)} {...rest}>
      <input type="radio" name={name} checked={!!checked} disabled={disabled} onChange={onChange} className="absolute opacity-0 size-0" />
      <span
        className={cn(
          "inline-flex items-center justify-center size-5 flex-none mt-px rounded-pill bg-surface-inset border-2",
          "transition-[border-color] duration-(--dur-fast) ease-standard",
          checked ? "border-action-human" : "border-border-default",
        )}
      >
        {checked ? <span className="size-[9px] rounded-pill bg-action-human" /> : null}
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
