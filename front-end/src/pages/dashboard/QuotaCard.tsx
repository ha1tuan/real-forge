import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import ProgressBar from "../../components/ui/ProgressBar";

/** Hạn mức nội dung + phút giọng đọc trong ngày. TODO: lấy từ API quota. */
export default function QuotaCard() {
  return (
    <Card tone="machine" header={<><CardTitle>Hạn mức hôm nay</CardTitle><Badge tone="machine">AUTO</Badge></>}>
      <div className="grid gap-5">
        <ProgressBar value={62} label="Nội dung / ngày · 5 của 8" />
        <ProgressBar value={28} tone="machine" height={6} label="Phút giọng đọc · 14 của 50" />
      </div>
    </Card>
  );
}
