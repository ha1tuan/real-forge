import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Toast from "../components/ui/Toast";
import useTheme from "../hooks/useTheme";
import type { LayoutContext, ToastData } from "../types";

const TOAST_DURATION = 3200;

export default function RootLayout() {
  const [theme, setTheme] = useTheme();
  const [toast, setToast] = useState<ToastData | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const showToast = (next: ToastData) => {
    window.clearTimeout(toastTimer.current);
    setToast(next);
    toastTimer.current = window.setTimeout(() => setToast(null), TOAST_DURATION);
  };

  const outletContext: LayoutContext = { showToast };

  return (
    <div
      data-theme={theme === "light" ? "light" : undefined}
      className="relative flex h-full min-h-0 bg-bg-app overflow-hidden"
    >
      <Sidebar theme={theme} onThemeChange={setTheme} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header />
        <main className="flex-1 min-h-0 flex flex-col">
          <Outlet context={outletContext} />
        </main>
      </div>
      {toast ? (
        <div className="absolute right-8 bottom-8 z-80">
          <Toast {...toast} onClose={() => setToast(null)} />
        </div>
      ) : null}
    </div>
  );
}
