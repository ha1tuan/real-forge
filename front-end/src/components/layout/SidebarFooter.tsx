import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../types";
import Badge from "../ui/Badge";
import IconButton from "../ui/IconButton";
import Tooltip from "../ui/Tooltip";

interface SidebarFooterProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

/** Chip người dùng + cảnh báo token + nút đổi giao diện. */
export default function SidebarFooter({ theme, onThemeChange }: SidebarFooterProps) {
  const isLight = theme === "light";
  // TODO: lấy thông tin tài khoản + token sắp hết hạn từ API.
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <span className="size-7.5 rounded-sm bg-gradient-forge grid place-items-center text-text-on-gradient font-bold text-[12px] leading-none font-mono">MT</span>
        <div className="grid leading-[1.3]">
          <span className="font-semibold text-body-sm leading-[1.2] font-display">Minh Trang</span>
          <span className="rf-label text-micro">Agency · 3 page</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Tooltip label="Token sắp hết hạn: Tin Công Nghệ" side="right">
          <Badge tone="warning" dot>1 token</Badge>
        </Tooltip>
        <div className="ml-auto">
          <Tooltip label={isLight ? "Chuyển sang tối" : "Chuyển sang sáng"} side="right">
            <IconButton
              icon={isLight ? Moon : Sun}
              label="Đổi giao diện"
              size="sm"
              variant="ghost"
              onClick={() => onThemeChange(isLight ? "dark" : "light")}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
