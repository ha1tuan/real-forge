import { useState } from "react";
import CalendarGrid from "./calendar/CalendarGrid";
import CalendarLegend from "./calendar/CalendarLegend";
import CalendarToolbar from "./calendar/CalendarToolbar";

export default function CalendarPage() {
  const [view, setView] = useState("month");
  return (
    <div className="flex-1 overflow-auto p-8 grid gap-5 content-start auto-rows-max">
      <CalendarToolbar view={view} onViewChange={setView} />
      {/* TODO: dựng view "Tuần" — design hiện chỉ có lưới tháng. */}
      <CalendarGrid />
      <CalendarLegend />
    </div>
  );
}
