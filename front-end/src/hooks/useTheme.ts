import { useEffect, useState } from "react";
import type { Theme } from "../types";

const STORAGE_KEY = "rf-theme";

function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

/** Theme sáng/tối, nhớ lựa chọn trong localStorage. Dark là mặc định. */
export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage bị chặn — bỏ qua, theme vẫn chạy trong phiên.
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
