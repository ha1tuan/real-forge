import { cn } from "../../lib/utils";
import type { DataTableColumn } from "../../types";
import { ALIGN_CLASS } from "./dataTableAlign";
import DataTableRow from "./DataTableRow";

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  rows: T[];
  onRowClick?: (row: T) => void;
  getRowKey?: (row: T, index: number) => string | number;
  className?: string;
}

/** Danh sách dạng hàng dày. `columns[].width` nhận mọi giá trị grid track. */
export default function DataTable<T>({ columns, rows, onRowClick, getRowKey = (_, i) => i, className }: DataTableProps<T>) {
  // grid track lấy từ cấu hình cột lúc runtime nên giữ inline
  const tracks = columns.map((c) => c.width || "1fr").join(" ");
  return (
    <div className={cn("bg-surface-card border-2 border-border-subtle rounded-lg overflow-hidden", className)}>
      <div className="rf-label grid gap-4 px-5 py-3 bg-alpha-spark-04 border-b border-border-subtle" style={{ gridTemplateColumns: tracks }}>
        {columns.map((c) => <span key={c.key} className={ALIGN_CLASS[c.align || "left"]}>{c.label}</span>)}
      </div>
      <div>
        {rows.map((r, i) => (
          <DataTableRow key={getRowKey(r, i)} columns={columns} row={r} tracks={tracks} last={i === rows.length - 1} onClick={onRowClick} />
        ))}
      </div>
    </div>
  );
}
