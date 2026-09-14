import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import Select from "../../components/ui/Select";
import Tabs from "../../components/ui/Tabs";
import { FANPAGES } from "../../lib/mockData";

interface CalendarToolbarProps {
  view: string;
  onViewChange: (view: string) => void;
}

const VIEW_TABS = [{ value: "week", label: "Tuần" }, { value: "month", label: "Tháng" }];
const FANPAGE_FILTER = ["Tất cả fanpage", ...FANPAGES.map((p) => p.name)];

export default function CalendarToolbar({ view, onViewChange }: CalendarToolbarProps) {
  return (
    <div className="flex items-center gap-4">
      <Tabs value={view} onChange={onViewChange} items={VIEW_TABS} className="flex-none border-none" />
      <div className="ml-auto flex items-center gap-3">
        {/* TODO: chuyển tháng, lọc fanpage, thêm bài */}
        <div className="flex gap-1">
          <IconButton icon={ChevronLeft} label="Trước" size="sm" />
          <IconButton icon={ChevronRight} label="Sau" size="sm" />
        </div>
        <span className="font-semibold text-body-lg leading-none font-display tracking-tight">Tháng 9 · 2026</span>
        <Select size="sm" options={FANPAGE_FILTER} aria-label="Lọc fanpage" className="w-[190px]" />
        <Button icon={Plus} size="sm">Thêm bài</Button>
      </div>
    </div>
  );
}
