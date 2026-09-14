import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import type { DataTableColumn } from "../../types";
import { ALIGN_CLASS } from "./dataTableAlign";

interface DataTableRowProps<T> {
  columns: DataTableColumn<T>[];
  row: T;
  tracks: string;
  last: boolean;
  onClick?: (row: T) => void;
}

export default function DataTableRow<T>({ columns, row, tracks, last, onClick }: DataTableRowProps<T>) {
  return (
    <div
      onClick={() => onClick?.(row)}
      className={cn(
        "grid gap-4 items-center px-5 py-4 text-body leading-[1.4] font-body hover:bg-surface-hover",
        "transition-[background] duration-(--dur-fast) ease-standard",
        !last && "border-b border-border-subtle",
        onClick ? "cursor-pointer" : "cursor-default",
      )}
      style={{ gridTemplateColumns: tracks }}
    >
      {columns.map((c) => (
        <div key={c.key} className={cn("min-w-0", ALIGN_CLASS[c.align || "left"])}>
          {c.render ? c.render(row) : (row as Record<string, ReactNode>)[c.key]}
        </div>
      ))}
    </div>
  );
}
