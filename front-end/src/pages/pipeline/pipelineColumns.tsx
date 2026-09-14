import { Ellipsis, RefreshCw, UserCheck } from "lucide-react";
import Badge from "../../components/ui/Badge";
import IconButton from "../../components/ui/IconButton";
import PipelineStepper from "../../components/ui/PipelineStepper";
import { stepsAt } from "../../lib/mockData";
import type { ContentItem, DataTableColumn } from "../../types";

/** Cột của bảng pipeline. `onOpen` mở màn duyệt cho hàng đang chờ duyệt. */
export function getPipelineColumns(onOpen: (item: ContentItem) => void): DataTableColumn<ContentItem>[] {
  return [
    { key: "id", label: "Mã", width: "96px", render: (r) => <span className="rf-num text-body-sm leading-[normal] text-text-muted">{r.id}</span> },
    { key: "title", label: "Nội dung", width: "2fr", render: (r) => (
      <div className="grid gap-1 min-w-0">
        <strong className="font-semibold text-body leading-[1.3] font-display truncate">{r.title}</strong>
        <span className="rf-label text-micro">{r.page} · {r.format}</span>
      </div>
    ) },
    { key: "steps", label: "6 bước", width: "230px", render: (r) => <PipelineStepper compact steps={stepsAt(r.at, { failed: r.failed })} /> },
    { key: "state", label: "Trạng thái", width: "150px", render: (r) => (
      r.failed ? <Badge tone="danger" dot>Lỗi</Badge>
      : r.at === 2 ? <Badge tone="human" dot>Chờ duyệt</Badge>
      : r.at === 5 ? <Badge tone="success">Đã đăng</Badge>
      : <Badge tone="machine" dot>Đang xử lý</Badge>
    ) },
    { key: "eta", label: "Cập nhật", width: "130px", render: (r) => (
      <div className="grid gap-0.5">
        <span className="rf-num text-body-sm leading-[normal]">{r.updated}</span>
        <span className="rf-label text-micro">{r.eta}</span>
      </div>
    ) },
    { key: "act", label: "", width: "86px", align: "right", render: (r) => (
      <div className="flex gap-1 justify-end">
        {r.at === 2 ? <IconButton icon={UserCheck} label="Duyệt" variant="primary" size="sm" onClick={(e) => { e.stopPropagation(); onOpen(r); }} /> : null}
        {/* TODO: gọi API chạy lại bước lỗi */}
        {r.failed ? <IconButton icon={RefreshCw} label="Chạy lại" variant="machine" size="sm" onClick={(e) => e.stopPropagation()} /> : null}
        <IconButton icon={Ellipsis} label="Thêm" variant="ghost" size="sm" onClick={(e) => e.stopPropagation()} />
      </div>
    ) },
  ];
}
