import { useOutletContext } from "react-router";
import type { LayoutContext } from "../types";

/** Trả về `showToast` do RootLayout cung cấp qua <Outlet context>. Chỉ dùng trong page. */
export default function useToast() {
  return useOutletContext<LayoutContext>().showToast;
}
