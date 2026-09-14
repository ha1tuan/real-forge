import { LoaderCircle, Send, UserCheck } from "lucide-react";
import StatTile, { type StatTileProps } from "../components/ui/StatTile";
import { ITEMS, RECENT_POSTS } from "../lib/mockData";
import DashboardHero from "./dashboard/DashboardHero";
import QuotaCard from "./dashboard/QuotaCard";
import RecentPostsCard from "./dashboard/RecentPostsCard";
import RunningPipelinesCard from "./dashboard/RunningPipelinesCard";

// TODO: số liệu KPI lấy từ API thống kê.
const STATS: StatTileProps[] = [
  { label: "Đã đăng 30 ngày", value: "128", unit: "bài", icon: Send, delta: "+12%" },
  { label: "Chờ duyệt", value: "2", tone: "human", icon: UserCheck },
  { label: "Đang xử lý", value: "3", tone: "machine", icon: LoaderCircle },
  { label: "Lượt xem 7 ngày", value: "128.4K", delta: "+8%" },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-auto p-8 grid gap-8 content-start auto-rows-max">
      <DashboardHero />

      <div className="grid grid-cols-[repeat(4,1fr)] gap-4">
        {STATS.map((stat) => <StatTile key={stat.label} {...stat} />)}
      </div>

      <div className="grid grid-cols-[1.6fr_1fr] gap-4 items-start">
        <RunningPipelinesCard items={ITEMS.slice(0, 3)} />
        <div className="grid gap-4">
          <QuotaCard />
          <RecentPostsCard posts={RECENT_POSTS} />
        </div>
      </div>
    </div>
  );
}
