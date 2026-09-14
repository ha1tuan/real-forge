import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type Theme = "dark" | "light";

/** Trạng thái một bước pipeline. Cyan = máy, magenta = cổng con người. */
export type StepState = "done" | "running" | "human" | "failed" | "idle";

export interface PipelineStep {
  label: string;
  state: StepState;
  meta?: string;
}

export type TokenStatus = "ok" | "warn" | "expired";

export interface Fanpage {
  id: string;
  name: string;
  followers: string;
  token: TokenStatus;
  expires: string;
}

export type ContentFormat = "Reel" | "Bài viết";

export interface ContentItem {
  id: string;
  title: string;
  page: string;
  format: ContentFormat;
  /** Index của bước hiện tại (0–5). */
  at: number;
  updated: string;
  eta: string;
  draft?: string;
  sources?: string[];
  failed?: boolean;
}

export interface ScheduledPost {
  t: string;
  title: string;
  page: string;
  state: StepState;
}

export interface RecentPost {
  title: string;
  views: string;
  likes: string;
}

export type BadgeTone = "neutral" | "human" | "machine" | "success" | "warning" | "danger" | "idle";

export type ToastTone = "info" | "success" | "warning" | "danger";

export interface ToastData {
  tone: ToastTone;
  title: string;
  message?: string;
}

/** Context mà RootLayout truyền xuống page qua <Outlet context>. */
export interface LayoutContext {
  showToast: (toast: ToastData) => void;
}

export type SelectOption = string | { value: string; label: string };

export interface TabItem {
  value: string;
  label: string;
  icon?: LucideIcon;
  count?: number;
}

export interface DataTableColumn<T> {
  key: string;
  label: string;
  /** Bất kỳ giá trị grid track nào: "2fr", "96px"… */
  width?: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => ReactNode;
}
