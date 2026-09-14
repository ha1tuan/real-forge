import { X } from "lucide-react";
import Button from "../../components/ui/Button";
import Dialog from "../../components/ui/Dialog";
import Field from "../../components/ui/Field";
import Textarea from "../../components/ui/Textarea";

interface RejectDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function RejectDialog({ open, onClose, onConfirm }: RejectDialogProps) {
  return (
    <Dialog
      open={open}
      title="Từ chối nội dung?"
      subtitle="Nội dung sẽ quay lại bước Viết lại kèm ghi chú của bạn."
      onClose={onClose}
      footer={<><Button variant="ghost" onClick={onClose}>Huỷ</Button><Button variant="danger" icon={X} onClick={onConfirm}>Từ chối</Button></>}
    >
      <Field label="Lý do" hint="AI sẽ dùng ghi chú này khi viết lại.">
        <Textarea rows={3} placeholder="Nội dung quá giống bài tuần trước…" />
      </Field>
    </Dialog>
  );
}
