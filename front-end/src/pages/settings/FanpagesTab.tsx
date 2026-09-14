import { Plus, RefreshCw, Trash2 } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import DataTable from "../../components/ui/DataTable";
import Icon from "../../components/ui/Icon";
import IconButton from "../../components/ui/IconButton";
import { Facebook } from "../../lib/icons";
import type { BadgeTone, DataTableColumn, Fanpage, TokenStatus } from "../../types";

interface FanpagesTabProps {
  fanpages: Fanpage[];
}

const TOKEN_BADGE: Record<TokenStatus, [BadgeTone, string]> = {
  ok: ["success", "Hợp lệ"],
  warn: ["warning", "Sắp hết hạn"],
  expired: ["danger", "Hết hạn"],
};

// TODO: cấp lại token, ngắt kết nối, kết nối fanpage mới qua Facebook OAuth.
const COLUMNS: DataTableColumn<Fanpage>[] = [
  { key: "name", label: "Fanpage", width: "2fr", render: (p) => (
    <div className="flex items-center gap-3">
      <span className="size-8.5 rounded-sm bg-surface-raised border-2 border-border-subtle grid place-items-center text-text-muted"><Icon icon={Facebook} size={16} /></span>
      <div className="grid gap-0.5">
        <strong className="font-semibold text-body leading-[1.2] font-display">{p.name}</strong>
        <span className="rf-label text-micro">{p.followers} người theo dõi</span>
      </div>
    </div>
  ) },
  { key: "token", label: "Token", width: "150px", render: (p) => <Badge tone={TOKEN_BADGE[p.token][0]} dot>{TOKEN_BADGE[p.token][1]}</Badge> },
  { key: "expires", label: "Hạn", width: "130px", render: (p) => <span className="rf-num text-body-sm leading-[normal] text-text-secondary">{p.expires}</span> },
  { key: "act", label: "", width: "170px", align: "right", render: (p) => (
    <div className="flex gap-2 justify-end">
      {p.token === "ok" ? null : <Button size="sm" variant="secondary" icon={RefreshCw}>Cấp lại token</Button>}
      <IconButton icon={Trash2} label="Ngắt kết nối" variant="ghost" size="sm" />
    </div>
  ) },
];

export default function FanpagesTab({ fanpages }: FanpagesTabProps) {
  return (
    <>
      <DataTable rows={fanpages} columns={COLUMNS} getRowKey={(p) => p.id} />
      <Button variant="secondary" icon={Plus} className="justify-self-start">Kết nối fanpage mới</Button>
    </>
  );
}
