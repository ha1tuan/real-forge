import { TrendingDown, TrendingUp, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

type StatTone = "default" | "machine" | "human";

export interface StatTileProps {
  label: string;
  value: string;
  unit?: string;
  /** Có dấu: "+12%", "-3%". */
  delta?: string;
  deltaTone?: "success" | "danger";
  icon?: LucideIcon;
  tone?: StatTone;
  className?: string;
}

const STAT_ACCENTS: Record<StatTone, string> = {
  default: "text-text-primary",
  machine: "text-machine-ink",
  human: "text-human-ink",
};

/** Số mono lớn + nhãn in hoa + delta tuỳ chọn. */
export default function StatTile({ label, value, unit, delta, deltaTone = "success", icon, tone = "default", className }: StatTileProps) {
  return (
    <div className={cn("grid gap-3 p-5 bg-surface-card border-2 border-border-subtle rounded-lg", className)}>
      <div className="flex items-center gap-2 text-text-muted">
        {icon ? <Icon icon={icon} size={14} /> : null}
        <span className="rf-label">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={cn("rf-num font-bold text-[34px] leading-none tracking-[-0.02em]", STAT_ACCENTS[tone])}>{value}</span>
        {unit ? <span className="rf-label">{unit}</span> : null}
        {delta ? (
          <span
            className={cn(
              "ml-auto inline-flex items-center gap-1 font-medium text-body-sm leading-none font-mono",
              deltaTone === "danger" ? "text-status-danger" : "text-status-success",
            )}
          >
            <Icon icon={deltaTone === "danger" ? TrendingDown : TrendingUp} size={13} />{delta}
          </span>
        ) : null}
      </div>
    </div>
  );
}
