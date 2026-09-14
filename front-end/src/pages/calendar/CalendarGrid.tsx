import Card from "../../components/ui/Card";
import { SCHEDULE } from "../../lib/mockData";
import CalendarDayCell from "./CalendarDayCell";

const DOW = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
// Tháng 9/2026 bắt đầu thứ Ba → ô đầu tiên là ngày 0 (tháng trước).
const DAYS = Array.from({ length: 35 }, (_, i) => i - 1);
const TODAY = 4;

/** Lưới tháng 7 × 5 với các bài đã lên lịch. */
export default function CalendarGrid() {
  return (
    <Card padding="none" className="overflow-hidden">
      <div className="grid grid-cols-[repeat(7,1fr)] bg-alpha-spark-04 border-b border-border-subtle">
        {DOW.map((d) => <span key={d} className="rf-label px-4 py-3">{d}</span>)}
      </div>
      <div className="grid grid-cols-[repeat(7,1fr)]">
        {DAYS.map((day, i) => (
          <CalendarDayCell
            key={i}
            day={day}
            inMonth={day >= 1 && day <= 30}
            isToday={day === TODAY}
            posts={SCHEDULE[day] ?? []}
            lastInRow={(i + 1) % 7 === 0}
            inLastRow={i >= 28}
          />
        ))}
      </div>
    </Card>
  );
}
