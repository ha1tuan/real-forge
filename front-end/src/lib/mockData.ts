import type { ContentItem, Fanpage, PipelineStep, RecentPost, ScheduledPost } from "../types";

// TODO: thay toàn bộ fixture dưới đây bằng dữ liệu thật từ API.

export const FANPAGES: Fanpage[] = [
  { id: "ev", name: "Xe Điện Việt", followers: "128K", token: "ok", expires: "12/12/2026" },
  { id: "tech", name: "Tin Công Nghệ", followers: "42K", token: "warn", expires: "12/10/2026" },
  { id: "food", name: "Ăn Gì Hôm Nay", followers: "9.8K", token: "expired", expires: "02/09/2026" },
];

export const STEP_LABELS = ["Tìm nguồn", "Viết lại", "Duyệt", "Tạo ảnh/video", "Ghép + giọng đọc", "Đăng"];

/** Dựng 6 bước pipeline với bước hiện tại ở index `i`. */
export function stepsAt(i: number, opts: { failed?: boolean; meta?: string } = {}): PipelineStep[] {
  return STEP_LABELS.map((label, k) => ({
    label,
    state: k < i ? "done" : k > i ? "idle" : opts.failed ? "failed" : k === 2 ? "human" : "running",
    meta: k === i ? opts.meta : undefined,
  }));
}

export const ITEMS: ContentItem[] = [
  {
    id: "RF-1042", title: "Xe điện VinFass tháng 9: giá lăn bánh mới", page: "Xe Điện Việt", format: "Reel", at: 2, updated: "12:06", eta: "chờ bạn",
    draft: "Tháng 9/2026, thị trường xe điện Việt Nam ghi nhận mức giảm giá lăn bánh sâu nhất từ đầu năm.\n\nBa mẫu bán chạy nhất đều được điều chỉnh, kèm ưu đãi sạc miễn phí tới hết quý 4. Nếu bạn đang cân nhắc chuyển sang xe điện, đây là thời điểm đáng chú ý.\n\n#xedien #vinfast #tinxe",
    sources: ["vnexpress.net · 2 giờ trước", "autopro.com.vn · 4 giờ trước"],
  },
  { id: "RF-1041", title: "5 mẹo tiết kiệm pin điện thoại khi đi du lịch", page: "Tin Công Nghệ", format: "Reel", at: 4, updated: "11:58", eta: "~3 phút" },
  { id: "RF-1040", title: "Trạm sạc nhanh mới khai trương tại Đà Nẵng", page: "Xe Điện Việt", format: "Bài viết", at: 1, updated: "11:41", eta: "~1 phút" },
  { id: "RF-1039", title: "Bản đồ quán ăn khuya quận 1", page: "Ăn Gì Hôm Nay", format: "Reel", at: 3, updated: "10:20", eta: "lỗi TTS", failed: true },
  { id: "RF-1038", title: "So sánh 3 mẫu xe máy điện dưới 30 triệu", page: "Xe Điện Việt", format: "Reel", at: 5, updated: "09:12", eta: "hoàn tất" },
];

/** Bài đã lên lịch, key = ngày trong tháng. */
export const SCHEDULE: Record<number, ScheduledPost[]> = {
  2: [{ t: "08:00", title: "Giá lăn bánh mới", page: "Xe Điện Việt", state: "human" }],
  3: [{ t: "07:30", title: "Mẹo tiết kiệm pin", page: "Tin Công Nghệ", state: "running" }, { t: "19:00", title: "Trạm sạc Đà Nẵng", page: "Xe Điện Việt", state: "idle" }],
  4: [{ t: "12:00", title: "Quán ăn khuya Q1", page: "Ăn Gì Hôm Nay", state: "failed" }],
  6: [{ t: "08:00", title: "So sánh xe máy điện", page: "Xe Điện Việt", state: "done" }],
  9: [{ t: "08:00", title: "Pin xe điện mùa mưa", page: "Xe Điện Việt", state: "idle" }],
  11: [{ t: "18:30", title: "Top 5 phụ kiện sạc", page: "Tin Công Nghệ", state: "idle" }],
};

export const RECENT_POSTS: RecentPost[] = [
  { title: "So sánh 3 mẫu xe máy điện", views: "42.1K", likes: "1.8K" },
  { title: "Trạm sạc mới Hải Phòng", views: "18.7K", likes: "620" },
  { title: "Pin LFP là gì?", views: "9.4K", likes: "310" },
];
