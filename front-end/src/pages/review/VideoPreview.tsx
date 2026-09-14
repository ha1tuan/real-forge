import { Play } from "lucide-react";
import Icon from "../../components/ui/Icon";

/** Khung preview 9:16 — placeholder rõ ràng, chưa có media thật. */
export default function VideoPreview() {
  return (
    <div className="relative aspect-[9/16] rounded-lg bg-bg-sunken border-2 border-border-default overflow-hidden grid place-items-center">
      <div className="absolute inset-0 bg-gradient-forge-soft opacity-55" />
      <div className="relative grid gap-3 justify-items-center text-center p-5">
        <span className="size-13.5 rounded-md bg-alpha-spark-14 grid place-items-center text-text-primary"><Icon icon={Play} size={22} /></span>
        <span className="rf-label">PREVIEW 9:16 · 42s</span>
        <span className="text-body-sm leading-normal font-body text-text-muted max-w-[200px]">
          Khung preview video — nguồn media thật chưa được cung cấp trong tài liệu thiết kế.
        </span>
      </div>
      <div className="absolute left-4 right-4 bottom-4 grid gap-2">
        <div className="h-1 rounded-pill bg-alpha-spark-14 overflow-hidden"><div className="w-[34%] h-full bg-text-primary" /></div>
        <div className="flex justify-between">
          <span className="rf-num text-micro text-text-secondary">00:14</span>
          <span className="rf-num text-micro text-text-secondary">00:42</span>
        </div>
      </div>
    </div>
  );
}
