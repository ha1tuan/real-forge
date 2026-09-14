import { Link as LinkIcon } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import Icon from "../../components/ui/Icon";
import PipelineStepper from "../../components/ui/PipelineStepper";
import { stepsAt } from "../../lib/mockData";
import type { ContentItem } from "../../types";

interface ReviewInfoColumnProps {
  item: ContentItem;
}

const FALLBACK_SOURCES = ["vnexpress.net · 2 giờ trước"];

/** Cột phải màn duyệt: tiến độ pipeline, nguồn tin, lịch dự kiến. */
export default function ReviewInfoColumn({ item }: ReviewInfoColumnProps) {
  return (
    <div className="grid gap-4 content-start">
      <Card tone="machine" padding="md" header={<><CardTitle>Pipeline</CardTitle><Badge tone="human">BƯỚC 3/6</Badge></>}>
        <PipelineStepper orientation="vertical" steps={stepsAt(2, { meta: "chờ bạn" })} />
      </Card>
      <Card padding="md" header={<CardTitle>Nguồn tin</CardTitle>}>
        <div className="grid gap-3">
          {(item.sources ?? FALLBACK_SOURCES).map((s) => (
            <div key={s} className="flex gap-2 items-center text-text-secondary text-body-sm leading-[1.4] font-body">
              <Icon icon={LinkIcon} size={14} strokeWeight="light" />{s}
            </div>
          ))}
        </div>
      </Card>
      <Card tone="flat" padding="md">
        <div className="grid gap-2">
          <span className="rf-label">Lịch dự kiến</span>
          <span className="rf-num font-bold text-[20px] leading-none">05/09 · 08:00</span>
          <span className="text-body-sm leading-normal font-body text-text-muted">Khung giờ tương tác tốt nhất của Xe Điện Việt.</span>
        </div>
      </Card>
    </div>
  );
}
