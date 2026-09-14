import { useNavigate } from "react-router";
import { Plus, UserCheck } from "lucide-react";
import Button from "../../components/ui/Button";
import EchoSpark from "../../components/ui/EchoSpark";

/** Hero đầu Dashboard — nơi duy nhất trên màn hình dùng gradient + echo spark. */
export default function DashboardHero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden rounded-sheet bg-surface-card border-2 border-border-subtle p-10 flex items-center gap-10 flex-wrap">
      <div className="absolute inset-0 bg-gradient-forge-soft opacity-90 pointer-events-none" />
      <div className="relative flex-[1_1_420px] min-w-0 grid gap-4">
        <span className="rf-label text-machine-ink">HÔM NAY · 04/09/2026</span>
        <h1 className="font-bold text-h1 leading-snug font-display max-w-[520px]">3 nội dung sẵn sàng, 2 đang chờ bạn duyệt.</h1>
        <p className="m-0 text-body-lg leading-normal font-body text-text-secondary max-w-[460px]">
          Pipeline chạy tự động từ 06:00. Bạn chỉ cần duyệt — phần còn lại hệ thống lo.
        </p>
        <div className="flex gap-3 mt-1">
          <Button variant="primary" icon={UserCheck} onClick={() => navigate("/review")}>Duyệt 2 nội dung</Button>
          <Button variant="secondary" icon={Plus} onClick={() => navigate("/create")}>Tạo yêu cầu</Button>
        </div>
      </div>
      <EchoSpark size={190} className="relative opacity-90 flex-none self-center" />
    </section>
  );
}
