import { useState } from "react";
import { Bell, Workflow } from "lucide-react";
import Tabs from "../components/ui/Tabs";
import { Facebook } from "../lib/icons";
import { FANPAGES } from "../lib/mockData";
import type { TabItem } from "../types";
import AutomationTab from "./settings/AutomationTab";
import FanpagesTab from "./settings/FanpagesTab";
import NotificationsTab from "./settings/NotificationsTab";

const SETTINGS_TABS: TabItem[] = [
  { value: "pages", label: "Fanpage", icon: Facebook, count: FANPAGES.length },
  { value: "notify", label: "Thông báo", icon: Bell },
  { value: "auto", label: "Tự động hoá", icon: Workflow },
];

export default function SettingsPage() {
  const [tab, setTab] = useState("pages");
  return (
    <div className="flex-1 overflow-auto p-8 grid gap-5 content-start auto-rows-max">
      <Tabs value={tab} onChange={setTab} items={SETTINGS_TABS} />
      {tab === "pages" ? <FanpagesTab fanpages={FANPAGES} /> : tab === "notify" ? <NotificationsTab /> : <AutomationTab />}
    </div>
  );
}
