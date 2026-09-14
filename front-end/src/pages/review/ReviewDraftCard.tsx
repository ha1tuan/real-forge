import { useState } from "react";
import { CalendarClock, Check, RefreshCw, X } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Field from "../../components/ui/Field";
import Tag from "../../components/ui/Tag";
import Textarea from "../../components/ui/Textarea";
import type { ContentItem } from "../../types";

interface ReviewDraftCardProps {
  item: ContentItem;
  onApprove: () => void;
  onReject: () => void;
}

/** Cột giữa màn duyệt: tiêu đề, bản nháp sửa được, các quyết định của người duyệt. */
export default function ReviewDraftCard({ item, onApprove, onReject }: ReviewDraftCardProps) {
  const [draft, setDraft] = useState(item.draft ?? "");
  return (
    <Card padding="xl" className="grid gap-5 content-start">
      <div className="flex items-start gap-4">
        <div className="flex-1 grid gap-2">
          <span className="rf-label">{item.id} · {item.page} · {item.format}</span>
          <h2 className="font-bold text-h2 leading-snug font-display">{item.title}</h2>
        </div>
        <Badge tone="human" dot>Chờ duyệt</Badge>
      </div>
      <Field label="Bản nháp" hint="Sửa trực tiếp — thay đổi được lưu khi bạn duyệt.">
        <Textarea rows={11} value={draft} onChange={(e) => setDraft(e.target.value)} counter={draft.length + " / 600"} />
      </Field>
      <div className="flex flex-wrap gap-2">
        <Tag>#xedien</Tag><Tag>#vinfast</Tag><Tag>#tinxe</Tag>
      </div>
      <div className="flex gap-3 pt-4 border-t border-border-subtle">
        <Button variant="primary" icon={Check} onClick={onApprove}>Duyệt &amp; tiếp tục</Button>
        {/* TODO: gọi API tạo lại bản nháp / lên lịch */}
        <Button variant="machine" icon={RefreshCw}>Tạo lại</Button>
        <Button variant="secondary" icon={CalendarClock}>Lên lịch</Button>
        <Button variant="danger" icon={X} className="ml-auto" onClick={onReject}>Từ chối</Button>
      </div>
    </Card>
  );
}
