import type { ReactNode } from "react";

interface CardTitleProps {
  children: ReactNode;
}

/** Tiêu đề h3 dùng trong `header` của Card (lặp lại ở hầu hết màn hình). */
export default function CardTitle({ children }: CardTitleProps) {
  return <h3 className="font-semibold text-h4 leading-[1.2] font-display">{children}</h3>;
}
