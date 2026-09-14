import { useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router";
import { ArrowLeft, Bell, ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";
import { navItems } from "../../config/navigation";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import Input from "../ui/Input";

/** Top bar 68px: kicker mono trên tiêu đề h3, hành động bên phải. */
export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const current = navItems.find(({ to }) => matchPath({ path: to, end: to === "/" }, pathname));
  const isReview = current?.to === "/review";

  return (
    <header className="h-(--topbar-h) flex-none flex items-center gap-5 px-8 border-b border-border-subtle bg-bg-app">
      <div className="flex-1 grid gap-[3px]">
        {current?.kicker ? <span className="rf-label">{current.kicker}</span> : null}
        <h2 className="font-semibold text-h3 leading-snug font-display">{current?.title}</h2>
      </div>

      {isReview ? (
        <div className="flex gap-2">
          {/* TODO: điều hướng sang nội dung chờ duyệt trước/sau */}
          <IconButton icon={ChevronLeft} label="Trước" />
          <IconButton icon={ChevronRight} label="Sau" />
          <Button variant="ghost" icon={ArrowLeft} onClick={() => navigate("/pipeline")}>Về pipeline</Button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Input
            icon={Search}
            size="sm"
            placeholder="Tìm nội dung…"
            aria-label="Tìm nội dung"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-[240px]"
          />
          <IconButton icon={Bell} label="Thông báo" variant="ghost" />
          <Button icon={Plus} onClick={() => navigate("/create")}>Yêu cầu mới</Button>
        </div>
      )}
    </header>
  );
}
