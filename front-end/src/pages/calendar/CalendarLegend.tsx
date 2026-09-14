import { cn } from "../../lib/utils";
import type { StepState } from "../../types";
import { STATE_DOT } from "./stateDot";

const LEGEND: { label: string; state: StepState }[] = [
  { label: "Đã đăng", state: "done" },
  { label: "Đang xử lý", state: "running" },
  { label: "Chờ duyệt", state: "human" },
  { label: "Lỗi", state: "failed" },
  { label: "Đã lên lịch", state: "idle" },
];

export default function CalendarLegend() {
  return (
    <div className="flex gap-6 flex-wrap">
      {LEGEND.map(({ label, state }) => (
        <span key={label} className="flex items-center gap-2">
          <span className={cn("size-2 rounded-pill", STATE_DOT[state])} />
          <span className="rf-label">{label}</span>
        </span>
      ))}
    </div>
  );
}
