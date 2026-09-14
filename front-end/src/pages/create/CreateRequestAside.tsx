import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import PipelineStepper from "../../components/ui/PipelineStepper";
import { STEP_LABELS } from "../../lib/mockData";
import type { PipelineStep } from "../../types";

const PREVIEW_STEPS: PipelineStep[] = STEP_LABELS.map((label, i) => ({
  label,
  state: i === 2 ? "human" : "idle",
  meta: i === 2 ? "bạn duyệt ở bước này" : undefined,
}));

/** Cột phải: xem trước 6 bước sẽ chạy + lưu ý về bước duyệt. */
export default function CreateRequestAside() {
  return (
    <div className="grid gap-4 content-start">
      <Card tone="machine" header={<><CardTitle>Sẽ chạy 6 bước</CardTitle><Badge tone="machine">~7 PHÚT</Badge></>}>
        <PipelineStepper orientation="vertical" steps={PREVIEW_STEPS} />
      </Card>
      <Card tone="flat">
        <div className="grid gap-3">
          <span className="rf-label">Lưu ý</span>
          <p className="m-0 text-body-sm leading-[1.6] font-body text-text-secondary">
            Nội dung luôn dừng ở bước Duyệt. Không có gì được đăng lên fanpage mà bạn chưa xem.
          </p>
        </div>
      </Card>
    </div>
  );
}
