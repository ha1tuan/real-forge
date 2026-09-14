import { NavLink } from "react-router";
import { navItems } from "../../config/navigation";
import { cn } from "../../lib/utils";
import type { Theme } from "../../types";
import Badge from "../ui/Badge";
import EchoMark from "../ui/EchoMark";
import Icon from "../ui/Icon";
import SidebarFooter from "./SidebarFooter";

interface SidebarProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

/** Rail trái 248px cố định: logo, menu (từ config/navigation), footer. */
export default function Sidebar({ theme, onThemeChange }: SidebarProps) {
  return (
    <aside className="w-(--sidebar-w) flex-none h-full bg-bg-sunken border-r border-border-subtle flex flex-col gap-6 px-4 py-6">
      <div className="px-2">
        <EchoMark size={34} tagline="Fanpage automation" />
      </div>

      <nav className="grid gap-1">
        {navItems.map(({ label, to, icon, count }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => cn(
              "flex items-center gap-3 h-10.5 px-3 rounded-md border-2 border-transparent cursor-pointer text-left no-underline text-body leading-none font-display tracking-tight",
              "transition-[background,color] duration-(--dur-fast) ease-standard",
              isActive
                ? "bg-alpha-magenta-16 text-text-primary font-semibold"
                : "bg-transparent text-text-secondary font-medium",
            )}
          >
            {({ isActive }) => (
              <>
                <span className={cn("inline-flex", isActive ? "text-action-human" : "text-text-muted")}><Icon icon={icon} size={18} /></span>
                <span className="flex-1">{label}</span>
                {count ? <Badge tone={isActive ? "human" : "neutral"}>{count}</Badge> : null}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto px-2">
        <SidebarFooter theme={theme} onThemeChange={onThemeChange} />
      </div>
    </aside>
  );
}
