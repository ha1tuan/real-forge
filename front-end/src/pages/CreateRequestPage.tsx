import { useState } from "react";
import { useNavigate } from "react-router";
import { Sparkles, Zap } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Checkbox from "../components/ui/Checkbox";
import Field from "../components/ui/Field";
import Input from "../components/ui/Input";
import Radio from "../components/ui/Radio";
import Select from "../components/ui/Select";
import Switch from "../components/ui/Switch";
import Tag from "../components/ui/Tag";
import Textarea from "../components/ui/Textarea";
import useToast from "../hooks/useToast";
import { FANPAGES } from "../lib/mockData";
import type { ContentFormat } from "../types";
import CreateRequestAside from "./create/CreateRequestAside";

const FANPAGE_OPTIONS = FANPAGES.map((p) => ({ value: p.id, label: p.name + " · " + p.followers }));

export default function CreateRequestPage() {
  const navigate = useNavigate();
  const showToast = useToast();
  const [format, setFormat] = useState<ContentFormat>("Reel");
  const [keywords, setKeywords] = useState(["#xe-điện", "#giá-lăn-bánh"]);
  const [notes, setNotes] = useState("");
  const [auto, setAuto] = useState(false);

  const handleSubmit = () => {
    // TODO: gửi brief lên API tạo pipeline, dùng mã RF trả về.
    navigate("/pipeline");
    showToast({ tone: "info", title: "Pipeline đã bắt đầu", message: "RF-1043 · Tìm nguồn đang chạy" });
  };

  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="grid grid-cols-[minmax(0,1fr)_340px] gap-6">
        <Card padding="xl" className="grid gap-6">
          <Field label="Chủ đề hoặc từ khoá" hint="Một câu mô tả là đủ — hệ thống sẽ tự tìm nguồn." required>
            <Input size="lg" icon={Sparkles} defaultValue="Giá lăn bánh xe điện tháng 9/2026" />
          </Field>
          <Field label="Từ khoá gợi ý">
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => <Tag key={k} onRemove={() => setKeywords(keywords.filter((x) => x !== k))}>{k}</Tag>)}
              <Tag onClick={() => setKeywords([...keywords, "#tin-xe"])}>+ thêm</Tag>
            </div>
          </Field>
          <div className="grid grid-cols-[1fr_1fr] gap-5">
            <Field label="Fanpage đích" required>
              <Select options={FANPAGE_OPTIONS} />
            </Field>
            <Field label="Ngôn ngữ nội dung">
              <Select options={["Tiếng Việt", "English"]} />
            </Field>
          </div>
          <Field label="Định dạng" required>
            <div className="flex gap-8">
              <Radio name="fmt" checked={format === "Reel"} onChange={() => setFormat("Reel")} label="Reel" description="Video dọc 9:16 kèm giọng đọc" />
              <Radio name="fmt" checked={format === "Bài viết"} onChange={() => setFormat("Bài viết")} label="Bài viết" description="Ảnh bìa + caption dài" />
            </div>
          </Field>
          <Field label="Ghi chú cho AI" hint="Giọng điệu, điều cần tránh, CTA…">
            <Textarea rows={3} maxLength={300} counter={`${notes.length} / 300`} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Giọng trung lập, không so sánh trực tiếp thương hiệu…" />
          </Field>
          <div className="grid gap-4 p-5 rounded-lg bg-surface-translucent border border-border-subtle">
            <Switch checked={auto} onChange={setAuto} tone="machine" label="Tự động đăng ngay sau khi duyệt" />
            <Checkbox defaultChecked label="Thông báo Telegram khi có bản nháp" />
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="ghost">Lưu nháp</Button>
            <Button variant="gradient" size="lg" icon={Zap} onClick={handleSubmit}>Bắt đầu pipeline</Button>
          </div>
        </Card>

        <CreateRequestAside />
      </div>
    </div>
  );
}
