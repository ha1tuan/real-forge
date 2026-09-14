import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useToast from "../hooks/useToast";
import { ITEMS } from "../lib/mockData";
import RejectDialog from "./review/RejectDialog";
import ReviewDraftCard from "./review/ReviewDraftCard";
import ReviewInfoColumn from "./review/ReviewInfoColumn";
import ReviewMediaColumn from "./review/ReviewMediaColumn";

type Decision = "approve" | "reject";

export default function ReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const showToast = useToast();
  const [rejectOpen, setRejectOpen] = useState(false);

  // TODO: tải nội dung theo id từ API; hiện fallback về mục chờ duyệt đầu tiên.
  const item = ITEMS.find((it) => it.id === id) ?? ITEMS[0];

  const decide = (decision: Decision) => {
    // TODO: gửi quyết định duyệt/từ chối lên API.
    navigate("/pipeline");
    showToast(decision === "approve"
      ? { tone: "success", title: "Đã duyệt", message: "Đang tạo ảnh/video…" }
      : { tone: "warning", title: "Đã từ chối", message: "Nội dung quay lại bước Viết lại" });
  };

  return (
    <div className="relative flex-1 overflow-auto p-8">
      <div className="grid grid-cols-[500px_minmax(0,1fr)_500px] gap-5">
        <ReviewMediaColumn />
        <ReviewDraftCard key={item.id} item={item} onApprove={() => decide("approve")} onReject={() => setRejectOpen(true)} />
        <ReviewInfoColumn item={item} />
      </div>

      <RejectDialog
        open={rejectOpen}
        onClose={() => setRejectOpen(false)}
        onConfirm={() => { setRejectOpen(false); decide("reject"); }}
      />
    </div>
  );
}
