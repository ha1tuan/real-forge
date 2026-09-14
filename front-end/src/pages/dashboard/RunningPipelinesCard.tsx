import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import PipelineStepper from "../../components/ui/PipelineStepper";
import { stepsAt } from "../../lib/mockData";
import type { ContentItem } from "../../types";

interface RunningPipelinesCardProps {
  items: ContentItem[];
}

export default function RunningPipelinesCard({ items }: RunningPipelinesCardProps) {
  const navigate = useNavigate();
  return (
    <Card header={<><CardTitle>Đang chạy</CardTitle><Button variant="ghost" size="sm" iconRight={ArrowRight} onClick={() => navigate("/pipeline")}>Xem pipeline</Button></>}>
      <div className="grid gap-4">
        {items.map((it) => (
          <div key={it.id} className="grid gap-3 p-4 rounded-lg bg-surface-translucent border border-border-subtle">
            <div className="flex items-center gap-3">
              <span className="rf-num text-body-sm leading-[normal] text-text-muted">{it.id}</span>
              <strong className="flex-1 font-semibold text-body leading-[1.3] font-display">{it.title}</strong>
              <Badge tone={it.at === 2 ? "human" : "machine"} dot>{it.at === 2 ? "Chờ duyệt" : "Đang xử lý"}</Badge>
            </div>
            <PipelineStepper compact steps={stepsAt(it.at, { failed: it.failed })} />
          </div>
        ))}
      </div>
    </Card>
  );
}
