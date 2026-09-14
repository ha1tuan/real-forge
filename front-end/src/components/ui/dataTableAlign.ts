import type { DataTableColumn } from "../../types";

/** Class căn lề cho ô header/hàng của DataTable theo `columns[].align`. */
export const ALIGN_CLASS: Record<NonNullable<DataTableColumn<unknown>["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};
