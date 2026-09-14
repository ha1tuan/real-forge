import { clsx, type ClassValue } from "clsx";

// tailwind-merge chưa có trong package.json nên cn() chỉ gộp bằng clsx.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
