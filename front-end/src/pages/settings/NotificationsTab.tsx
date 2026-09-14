import { useState } from "react";
import { Send, Zap } from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import Checkbox from "../../components/ui/Checkbox";
import Field from "../../components/ui/Field";
import Input from "../../components/ui/Input";
import Switch from "../../components/ui/Switch";

// TODO: đọc/lưu cấu hình thông báo qua API.
export default function NotificationsTab() {
  const [telegram, setTelegram] = useState(true);
  const [web, setWeb] = useState(true);
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-4">
      <Card header={<><CardTitle>Telegram</CardTitle><Switch checked={telegram} onChange={setTelegram} aria-label="Bật Telegram" /></>}>
        <div className="grid gap-5">
          <Field label="Chat ID" hint="Lấy từ @userinfobot"><Input icon={Send} defaultValue="-1002455119832" /></Field>
          <div className="grid gap-3">
            <Checkbox defaultChecked label="Có nội dung chờ duyệt" />
            <Checkbox defaultChecked label="Đăng thành công" />
            <Checkbox defaultChecked label="Đăng thất bại / token lỗi" />
            <Checkbox label="Báo cáo hiệu suất hàng tuần" />
          </div>
          <Button variant="machine" size="sm" icon={Zap} className="justify-self-start">Gửi tin thử</Button>
        </div>
      </Card>
      <Card header={<><CardTitle>Trên web</CardTitle><Switch checked={web} onChange={setWeb} aria-label="Bật thông báo trên web" /></>}>
        <div className="grid gap-3">
          <Checkbox defaultChecked label="Hiện toast khi pipeline hoàn tất" />
          <Checkbox defaultChecked label="Đếm số nội dung chờ duyệt trên sidebar" />
          <Checkbox label="Âm thanh thông báo" />
          <Field label="Giờ im lặng" className="mt-3">
            <div className="flex gap-3 items-center">
              <Input size="sm" defaultValue="22:00" aria-label="Bắt đầu" className="w-[100px]" />
              <span className="text-text-muted">→</span>
              <Input size="sm" defaultValue="06:30" aria-label="Kết thúc" className="w-[100px]" />
            </div>
          </Field>
        </div>
      </Card>
    </div>
  );
}
