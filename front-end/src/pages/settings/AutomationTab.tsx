import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import Checkbox from "../../components/ui/Checkbox";
import Field from "../../components/ui/Field";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Switch from "../../components/ui/Switch";

const VOICES = ["Nữ · miền Bắc", "Nam · miền Bắc", "Nữ · miền Nam"];

// TODO: đọc/lưu quy tắc tự động hoá qua API.
export default function AutomationTab() {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-4">
      <Card header={<CardTitle>Quy tắc pipeline</CardTitle>}>
        <div className="grid gap-5">
          <Switch defaultChecked tone="machine" label="Tự tìm nguồn mỗi 06:00" />
          <Switch tone="machine" label="Tự đăng sau khi duyệt" />
          <Field label="Số nội dung tối đa / ngày"><Input suffix="BÀI" defaultValue="8" size="sm" className="w-[140px]" /></Field>
          <Field label="Giọng đọc mặc định"><Select options={VOICES} /></Field>
        </div>
      </Card>
      <Card tone="flat" header={<CardTitle>Giới hạn an toàn</CardTitle>}>
        <div className="grid gap-4">
          <Checkbox checked label="Luôn dừng ở bước Duyệt" description="Không thể tắt cho fanpage có hơn 100K người theo dõi." disabled />
          <Checkbox defaultChecked label="Chặn nội dung trùng trong 14 ngày" />
          <Checkbox label="Cho phép AI dùng nguồn nước ngoài" />
        </div>
      </Card>
    </div>
  );
}
