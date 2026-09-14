import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCheck, LoaderCircle, OctagonAlert, UserCheck } from "lucide-react";
import Card from "../components/ui/Card";
import DataTable from "../components/ui/DataTable";
import EmptyState from "../components/ui/EmptyState";
import Tabs from "../components/ui/Tabs";
import { ITEMS } from "../lib/mockData";
import type { ContentItem, TabItem } from "../types";
import { getPipelineColumns } from "./pipeline/pipelineColumns";

// TODO: số đếm theo trạng thái lấy từ API.
const PIPELINE_TABS: TabItem[] = [
  { value: "all", label: "Tất cả", count: ITEMS.length },
  { value: "running", label: "Đang chạy", icon: LoaderCircle, count: 3 },
  { value: "review", label: "Chờ duyệt", icon: UserCheck, count: 1 },
  { value: "failed", label: "Lỗi", icon: OctagonAlert, count: 1 },
  { value: "done", label: "Đã đăng", count: 1 },
];

function matchesTab(item: ContentItem, tab: string) {
  switch (tab) {
    case "all": return true;
    case "review": return item.at === 2;
    case "failed": return !!item.failed;
    case "done": return item.at === 5;
    default: return !item.failed && item.at !== 2;
  }
}

export default function PipelinePage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("all");
  const items = ITEMS.filter((item) => matchesTab(item, tab));
  const openReview = (item: ContentItem) => navigate(`/review/${item.id}`);

  return (
    <div className="flex-1 overflow-auto p-8 grid gap-5 content-start auto-rows-max">
      <Tabs value={tab} onChange={setTab} items={PIPELINE_TABS} />
      {items.length === 0 ? (
        <Card><EmptyState icon={CheckCheck} title="Không có nội dung trong bộ lọc này" /></Card>
      ) : (
        <DataTable
          rows={items}
          getRowKey={(r) => r.id}
          onRowClick={(r) => { if (r.at === 2) openReview(r); }}
          columns={getPipelineColumns(openReview)}
        />
      )}
    </div>
  );
}
