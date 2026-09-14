import { CalendarDays, CirclePlus, LayoutDashboard, Settings, UserCheck, Workflow, type LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
  /** Số hiện trên badge của mục menu. TODO: lấy từ API. */
  count?: number;
  /** Tiêu đề + kicker hiển thị trên Header khi route đang mở. */
  title: string;
  kicker: string;
}

export const navItems: NavItem[] = [
  { label: "Tổng quan", to: "/", icon: LayoutDashboard, title: "Xin chào, Minh Trang", kicker: "TỔNG QUAN" },
  { label: "Tạo yêu cầu", to: "/create", icon: CirclePlus, title: "Tạo yêu cầu nội dung", kicker: "BƯỚC 1 · BRIEF" },
  { label: "Pipeline", to: "/pipeline", icon: Workflow, count: 5, title: "Pipeline nội dung", kicker: "6 BƯỚC TỰ ĐỘNG" },
  { label: "Chờ duyệt", to: "/review", icon: UserCheck, count: 2, title: "Duyệt nội dung", kicker: "BƯỚC 3 · CON NGƯỜI" },
  { label: "Lịch đăng", to: "/calendar", icon: CalendarDays, title: "Lịch đăng bài", kicker: "LỊCH NỘI DUNG" },
  { label: "Cài đặt", to: "/settings", icon: Settings, title: "Cài đặt", kicker: "FANPAGE · THÔNG BÁO · TỰ ĐỘNG HOÁ" },
];
