import { Volume2 } from "lucide-react";
import Card from "../../components/ui/Card";
import IconButton from "../../components/ui/IconButton";
import VideoPreview from "./VideoPreview";

/** Cột trái màn duyệt: preview video + giọng đọc. */
export default function ReviewMediaColumn() {
  return (
    <div className="grid gap-4 content-start">
      <VideoPreview />
      <Card tone="flat" padding="sm">
        <div className="grid gap-3">
          <span className="rf-label">Giọng đọc</span>
          <div className="flex items-center gap-3">
            {/* TODO: phát audio TTS */}
            <IconButton icon={Volume2} label="Nghe thử" variant="machine" size="sm" />
            <span className="text-body-sm leading-[normal] font-body text-text-secondary">Nữ · miền Bắc · 1.0×</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
